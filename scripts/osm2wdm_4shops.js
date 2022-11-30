/*
 * Script to transform original iD shop presets into Walk Data Model
 *
 * To make it run, please :
 *   - Create a work directory and set the WORK_DIR constant below
 *   - Download the latest id-tagging-schema release here : https://github.com/openstreetmap/id-tagging-schema/releases
 *   - Unzip the content into a id-tagging-schema sub-directory of WORK_DIR
 *   - Add OSM to WDM mapping files (CSV extracted from poi.ods: Shop.csv, Government.csv)
 *   - Then run this script
 *
 * Produced results are :
 *   - Individual JSON files for each preset (to copy in yukaidi-tagging-schema/data/presets/ folder)
 *   - PO files with original labels and their translations (to append in yukaidi-schema-translate files)
 *   - Markdown documentation of generated presets
 */

const WORK_DIR = "/home/adrien/Stockage/tmp/yukaimaps";


// --------------------------------------------------------------------
// Rest of the script
//

// Imports
import { parse as csvparse } from "csv-parse/sync";
import fs from "fs";
import mdtable from "tablemark";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Input datasets
const ID_PRESETS = require(`${WORK_DIR}/id-tagging-schema/dist/presets.json`);
const ID_TRANSLATIONS_FR = require(`${WORK_DIR}/id-tagging-schema/dist/translations/fr.json`);

const WDM_PRESETS_DIR = `${WORK_DIR}/wdm_presets`;
const WDM_INPUTS = ["Shop", "Government", "Restaurant", "Theater"];

const WDM_I18N_DIR = `${WORK_DIR}/wdm_translations`;

// Storage
const WDM_MAPPINGS = {};
for(let wdmi of WDM_INPUTS) {
	WDM_MAPPINGS[wdmi] = csvparse(fs.readFileSync(`${WORK_DIR}/${wdmi}.csv`), { columns: true, delimiter: ";" });
}
const WDM_I18N_EN = {};
const WDM_I18N_FR = {};
const WDM_MD = {};


// --------------------------------------------------------------------
// Utility functions

/*
 * Get original iD preset as JSON + original identifier, or undefined if not found
 */
function findIdPreset(key, value) {
	if(ID_PRESETS[`${key}/${value}`]) {
		return { pid: `${key}/${value}`, preset: require(`${WORK_DIR}/id-tagging-schema/data/presets/${key}/${value}.json`) };
	}

	// If no obvious preset found, look for tags precisely
	for(let pid in ID_PRESETS) {
		const preset = ID_PRESETS[pid];
		if(preset.tags[key] === value) {
			return { pid, preset: require(`${WORK_DIR}/id-tagging-schema/data/presets/${pid}.json`) };
		}
	}

	return undefined;
}

/*
 * Transform an iD preset into a WDM preset
 */
function iDToWDMPreset(iDPreset, wdmKey, wdmValue) {
	const wdmPreset = {
		"name": iDPreset.name,
		"icon": iDPreset.icon,
		"terms": iDPreset.terms,
		"aliases": iDPreset.aliases,
		"geometry": [
			"area",
			"point"
		],
        "tags": {
			"PointOfInterest": wdmKey,
            [wdmKey]: wdmValue
        },
        "fields": [
			"{PointOfInterest/default_POI}"
		],
		"moreFields": [
			"{PointOfInterest/default_POI}"
		]
	};

	// Filter empty entries
	Object.entries(wdmPreset).forEach(e => {
		let [prop, val] = e;
		if(val === undefined) {
			delete wdmPreset[prop];
		}
	});

	return wdmPreset;
}

/*
 * Save as JSON file a given WDM preset
 */
function writeWdmPreset(key, value, content) {
	const outputDir = `${WDM_PRESETS_DIR}/PointOfInterest/${key}`;

	// Create output dir if not exists
	if(!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Save preset as file
	fs.writeFileSync(`${outputDir}/${value}.json`, JSON.stringify(content, null, 2));
}

/*
 * Add a single translation of WDM preset in-memory
 */
function appendWdmI18n(wdmKey, wdmVal, wdmPreset, iDPid) {
	const iDFR = ID_TRANSLATIONS_FR.fr.presets.presets[iDPid];

	WDM_I18N_EN[wdmPreset.name] = {
		label: `.en.presets.presets.PointOfInterest/${wdmKey}/${wdmVal}.name`,
		msgid: wdmPreset.name,
		msgstr: ""
	};

	WDM_I18N_FR[wdmPreset.name] = {
		label: `.en.presets.presets.PointOfInterest/${wdmKey}/${wdmVal}.name`,
		msgid: wdmPreset.name,
		msgstr: iDFR.name
	};

	if(wdmPreset.terms && wdmPreset.terms.length > 0) {
		WDM_I18N_EN[wdmPreset.terms.join(",")] = {
			label: `.en.presets.presets.PointOfInterest/${wdmKey}/${wdmVal}.terms`,
			msgctxt: `.en.presets.presets.PointOfInterest/${wdmKey}/${wdmVal}.terms`,
			msgid: wdmPreset.terms.join(","),
			msgstr: ""
		};

		WDM_I18N_FR[wdmPreset.terms.join(",")] = {
			label: `.en.presets.presets.PointOfInterest/${wdmKey}/${wdmVal}.terms`,
			msgctxt: `.en.presets.presets.PointOfInterest/${wdmKey}/${wdmVal}.terms`,
			msgid: wdmPreset.terms.join(","),
			msgstr: iDFR.terms
		};
	}

	// Also save metadata to generate Markdown docs
	if(!WDM_MD[wdmKey]) { WDM_MD[wdmKey] = {}; }
	WDM_MD[wdmKey][wdmVal] = iDFR.name;
}

/*
 * Save PO translation file
 */
function writePoFile(wdmI18n, filename) {
	// Create output dir if not exists
	if(!fs.existsSync(WDM_I18N_DIR)) {
		fs.mkdirSync(WDM_I18N_DIR, { recursive: true });
	}

	// Convert i18n into PO format
	const poText = Object.values(wdmI18n).map(t => {
		let text = `#: ${t.label}\n`;
		if(t.msgctxt) { text += `msgctxt "${t.msgctxt}"\n`; }
		text += `msgid "${t.msgid}"\n`;
		text += `msgstr "${t.msgstr}"`;

		return text;
	}).join("\n\n");

	// Save file
	fs.writeFileSync(`${WDM_I18N_DIR}/${filename}`, poText);
}

/*
 * Generate a markdown table for a single WDM Key
 */
function wdmMdDoc(wdmKey) {
	const values = Object.entries(WDM_MD[wdmKey])
		.sort((a,b) => a[0].localeCompare(b[0]))
		.map(e => ({ key: wdmKey, val: e[0], desc: e[1] }));

	return `#### ${wdmKey} = *

${mdtable(values, { columns: [ 'Clé', 'Valeur', 'Description']})}`;
}


// --------------------------------------------------------------------
// Main processing code
Object.values(WDM_MAPPINGS).forEach(wdmMappings => {
	wdmMappings.forEach(wdmMapping => {
		const wdmKey = wdmMapping['WDM key'].trim();
		const wdmVal = wdmMapping['WDM Value'].trim();
		const osmKey = wdmMapping['OSM key'].trim();
		const osmVal = wdmMapping['OSM value'].trim();

		const iDPresetMetadata = findIdPreset(osmKey, osmVal);

		if(iDPresetMetadata) {
			const preset = iDToWDMPreset(iDPresetMetadata.preset, wdmKey, wdmVal);
			writeWdmPreset(wdmKey, wdmVal, preset);
			appendWdmI18n(wdmKey, wdmVal, preset, iDPresetMetadata.pid);
		}
		else {
			console.error(`Preset not found: ${osmKey}=${osmVal}`);
		}
	});
});

writePoFile(WDM_I18N_EN, "catalog.pot");
writePoFile(WDM_I18N_EN, "en.po");
writePoFile(WDM_I18N_FR, "fr.po");

// Note : tablemark is a promise because why not...
const mdDocFile = `${WORK_DIR}/tags.md`;
let mdDoc = Object.keys(WDM_MD).map(k => wdmMdDoc(k)).join("\n\n");
fs.writeFileSync(mdDocFile, mdDoc);

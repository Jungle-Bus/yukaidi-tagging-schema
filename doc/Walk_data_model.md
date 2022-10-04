# Documentation du modèle de données WDM

Walk Data Model (WDM) : modèle de données utilisé pour le projet, calqué sur le modèle OpenStreetMap (OSM) géométrique avec des ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeuds, des ![way picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_way.svg/20px-Osm_element_way.svg.png) chemins, des ![area picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_area.svg/20px-Osm_element_area.svg.png) aires et des ![relation picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_relation.svg/20px-Osm_element_relation.svg.png) relations, auxquels on ajoute des attributs clefs valeurs.


# SitePathLink=*
On utilisera SitePathLink=* pour tracer tout type de voirie utilisable par un piéton.

S'utilise sur les ![way picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_way.svg/20px-Osm_element_way.svg.png) chemins uniquement.

Les noeuds d'origine et de destination doivent correspondre au début d'un autre SitePathLink ou être un entrée ou un équipement.

### Valeurs


| Clef         | Valeur     | Description                                                                                                         |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------- |
| SitePathLink | Pavement   | un trottoir                                                                                                         |
| SitePathLink | Footpath   | un chemin piéton, une voie cyclable partagée avec les piétons                                                       |
| SitePathLink | Street     | une rue piétonne, une voie de parking ou une impasse sans trottoir où les piétons sont tolérés                      |
| SitePathLink | OpenSpace  | une place piétonne                                                                                                  |
| SitePathLink | Concourse  | rue couverte, traboule                                                                                              |
| SitePathLink | Passage    | passage étroit, ruelle étroite                                                                                      |
| SitePathLink | Stairs     | un escalier simple, avec une seule volée de marches                                                                 |
| SitePathLink | Escalator  | un escalator                                                                                                        |
| SitePathLink | Travelator | un tapis roulant                                                                                                    |
| SitePathLink | Ramp       | une rampe d'accès, ttructure en pente permettant de franchir une dénivellation, un changement de niveau ou d'étage. |
| SitePathLink | Crossing   | un passage piéton, un passage à niveau pour les piétons, ou une traversée                                           |
| SitePathLink | Hall       | un cheminement en intérieur, dans une salle ou un hall                                                              |
| SitePathLink | Corridor   | un cheminement en intérieur dans un couloir, etc                                                                    |
| SitePathLink | Quay       | un quai de tram, de bus, etc                                                                                        |


### Tags fréquents

| Clef                         | Description                                                                                                                                                          | Contraintes sur la valeur                                                                                                                                                  | Exemple                                                                         |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Name                         | le nom si pertinent (par exemple pour les rues piétonnes)                                                                                                            |                                                                                                                                                                            | Name = Chemin Forestier des Dames                                               |
| Length                       | longueur du tronçon de cheminement. Il ne s'agit pas de la distance à vol d'oiseau entre les deux nœuds, mais de la distance opérationnelle parcourue sur ce tronçon | En mètre arrondi au mètre. TODO CNIG dit cm</br>                                                                                                                                           | Length = 24                                                                     |
| WheelchairAccess             | indique si l'access possible en fauteuil roulant                                                                                                                     | Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via un attribut complémentaire)                                           | WheelchairAccess = Yes                                                          |
| WheelchairAccess:Description | à renseigner obligatoirement et uniquement lorsque WheelchairAccess = Limited pour expliquer pourquoi l’accessibilité n’est que partielle                            |                                                                                                                                                                            | WheelchairAccess:Description = Un bollard empêche le passage en fauteil roulant |
| Tilt                         | Dévers en pourcentage ou en degré. TODO valeurs négatives autorisées ?                                                                                               | préciser l'unité (% ou deg) dans le champ                                                                                                                                  | Tilt = 2% <br> Tilt = 12deg                                                     |
| Slope                        | Pente en pourcentage ou en degré  TODO valeurs négatives autorisées ?                                                                                                | préciser l'unité (% ou deg) dans le champ                                                                                                                                  | Slope = 2% <br> Slope = 12deg                                                   |
| HighwayType                  | type de voie d’après le schéma direction de la voirie français                                                                                                       | Valeurs autorisées : <br>- Street (voie classique : rue, avenue, boulevard) <br>- LimitedSpeedStreet (zone 30) <br>- LivingStreet (zone de rencontre) <br>- Pedestrian (rue piétonne, aire piétonne, sente piétonne) <br>- Bicycle (voie verte) <br>- Unclassified (autre type de voie inscrit au schéma directeur de la voirie) | HighwayType=LivingStreet |
| Width                        | largeur utile de passage                                                                                                                                             | En mètre arrondi au mètre. </br>                                                                                                                                           | Width = 24                                                                      |
| StructureType                | type de passage                                                                                                                                                      | Si non renseigné, on suppose que StructureType = Pathway.<br>Valeurs autorisées : <br> - Pathway (sentier) <br> - Overpass (passerelle, pont),  <br> - Underpass (passage sous-terrain) <br> - Tunnel (tunnel)<br> - Corridor (couloir) | StructureType=Tunnel |
| Outdoor                      | couverture du cheminement                                                                                                                                            | Valeurs autorisées : <br> - Yes  (extérieur non couvert) <br> - No (intérieur) <br> - Covered (extérieur couvert) | Outdoor=No |
| Incline                      | sens du déplacement, dans le sens du tracé | Valeurs autorisées : <br> - Up (ça monte)<br> - Down (ça descend)<br> -No (pas de changement de niveau) | Incline=Down |
| FlooringMaterial                     | matériau de revêtement au sol                                                                                                                                                    | Valeurs autorisées : <br>- Asphalt (asphalte) <br>- Concrete (béton) <br>- Wood (bois) <br>- Dirt (terre) <br>- Gravel (graviers) <br>- Grass (gazon) <br>- CeramicTiles (carrelage) <br>- PlasticMatting (matière plastique) <br>- SteelPlate (plaques métallique) <br>- Sand (sable stabilisé) <br>- Stone (pierre) <br>- Carpet (tapis) <br>- Rubber (caoutchouc) <br>- Cork (liège) <br>- FibreglassGrating (taillebotis en fibre de verre) <br>- GlazedCeramicTiles (carreaux de céramique émaillés) <br>- Vinyl (vinyle) <br>- Uneven (matériau inégal par nature) | FlooringMaterial=Asphalt |
| Flooring              | état du revêtement                                                                                                                                                   | Valeurs autorisées : <br>- None (pas de revêtement) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat) | Flooring:Status = Worn |
| TactileGuidingStrip | bande de guidage podotactile                                                                                                                                         | Valeurs autorisées : <br> - Yes (oui), <br> - No (non)                                                                                                                     | TactileGuidingStrip = No                                                        |
| Lighting                     | éclairage                                                                                                                                                            | Valeurs autorisées : <br> - Yes (éclairé et adapté aux déficients visuels) <br> - No (pas d'éclairage) <br> - Bad (éclairé mais non adapté pour les déficients visuels)    | Lighting = Yes                                                                  |

#### Tags complémentaires des SitePathLink = Crossing


Les passages piétons et traversées peuvent avoir des tags complémentaires : 
| Clef | Description | Contraintes sur la valeur | Exemple |
| ---- | ----------- | ------------------------- | ------- |
| Crossing | type de traversée | Valeurs autorisées : <br> - Rail (passage à niveau)<br> - UrbanRail (passage à niveau croisant des voies de tram)<br> -  Road (passage piéton, traversée de route)<br> - RoadWithIsland (passage piéton avec îlot en centre de voirie)<br> -  CycleWay (passage piéton sur piste cyclable) | Crossing=RoadWithIsland |
| PedestrianLights | présence de feux lunmineux | Valeurs autorisées : <br> - Yes <br> - No  | PedestrianLights=No |
| ZebraCrossing | présence et état du marquage au sol | Valeurs autorisées : <br>- None (pas de marquage au sol) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat) | ZebraCrossing = None |
| VisualGuidanceBands | présence de repère continu au sol |Valeurs autorisées : <br> - Yes <br> - No | VisualGuidanceBands=Yes  | 
| AccousticCrossingAid | présence et état des répétiteurs sonores | Valeurs autorisées : <br>- None (pas de répétiteurs sonores) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat) | AccousticCrossingAid = Good |



### Tags complémentaires des SitePathLink

Les tags suivants peuvent également être présents sur certains objets SitePathLink

| Clef     | Description                                                                    | Contraintes sur la valeur                                                                                                                                  | SitePathLink concernés       |
| -------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Handrail | présence d'une main courante sur laquelle on peut poser la main pour s'appuyer | Valeurs autorisées : <br> - Right (à droite uniquement)  <br> - Left (à gauche uniquement)  <br> - Both (des deux côtés) <br> - None (pas de main courante) | Ramp, Stairs |
| StepCount | nombre de marches. dans le cas d'un escalier avec plusieurs volées de marches, c'est le nombre de marches total | Nombre entier positif | Stairs |
| StairFlightCount | nombre de volées de marches. <br>Si non renseigné, on suppose que StairFlightCount=0 | Nombre entier positif |  Stairs |
| StepColourContrast | état et présence de marches contrastées | Valeurs autorisées : <br>- None (pas de contraste) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat) | Stairs |
| StepHeight | hauteur de marche | en mètres arrondi au cm | Stairs |
| StoppedIfUnused| signale un tapis roulant ou escalator qui s'arrête lorsqu'il n'est pas utilisé, et doit être remis en marche par un détecteur automatique ou un bouton |  Valeurs autorisées : <br> - Yes <br> - No  | Escalator, Travelator |
| Conveying | indique la direction de déplacement d'un escalator ou tapis roulant par rapport au sens du tracé. Pour ces objets, si non renseigné, on suppose que Conveying=Forward | Valeurs autorisées : <br>- Forward (dans le sens du tracé) <br>- Backward (dans le sens opposé du tracé) <br>- Reversible (dans les deux sens) | Escalator, Travelator |
| Gated | indique si un contrôle d'accès est nécessaire pour emprunter ce cheminement | Si non renseigné, on suppose que Gated = No. <br> Valeurs autorisées : <br> - Yes (accès limité par des tourniquets, etc) <br> - No (accès ouvert et libre) | principalement Hall |
|ManoeuvringDiameter |diamètre de la zone de manœuvre des usagers en fauteuil roulant. Pour les quais, mesuré une fois la palette ou la plate-forme élévatrice déployée | Décimal positif en mètre, arrondi au cm| Quay |
| AudibleSignals | indique si une signalétique auditive est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via un attribut complémentaire) | Principalement Quay, Crossing |
| AudibleSignals:Description | à renseigner obligatoirement et uniquement lorsque AudibleSignals = Limited pour expliquer pourquoi la disponibilité n’est que partielle |  | Principalement Quay, Crossing |
| VisualSigns | indique si une signalétique visuelle est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via un attribut complémentaire) | Principalement Quay, Crossing |
| VisualSigns:Description | à renseigner obligatoirement et uniquement lorsque VisualSigns = Limited pour expliquer pourquoi la disponibilité n’est que partielle | | Principalement Quay, Crossing |
| TransportMode | le mode de transport en commun | Valeurs autorisées : <br> - Bus <br> - Coach (car)  <br> - Tram (tramway) <br> - Water (ferry, bateau bus) | Quay uniquement |







# PointOfInterest = *
correspond à des points d'intérêts, tels que des ERP

# Tags génériques

Les tags ci-dessous peuvent être trouvés sur n'importe quel type d'objet :

| Clef        | Description                                                          | Exemple |
| ----------- | -------------------------------------------------------------------- | ------- |
| FixMe       | une note indiquant que quelque chose est à corriger, à usage interne |         |
| Description | une description à usage du public                                    |         |

TODO : ajouter les ref:* pour conserver les id d'import

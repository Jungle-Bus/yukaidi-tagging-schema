# Documentation du modèle de données WDM

Walk Data Model (WDM) : modèle de données utilisé pour le projet, calqué sur le modèle OpenStreetMap (OSM) géométrique avec des ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeuds, des ![way picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_way.svg/20px-Osm_element_way.svg.png) chemins, des ![area picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_area.svg/20px-Osm_element_area.svg.png) aires et des ![relation picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_relation.svg/20px-Osm_element_relation.svg.png) relations, auxquels on ajoute des attributs clefs valeurs.


# SitePathLink=*
On utilisera SitePathLink=* pour tracer tout type de voirie utilisable par un piéton.

S'utilise sur les ![way picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_way.svg/20px-Osm_element_way.svg.png) chemins, à l'exception des passages piétons (SitePathLink=Crossing) et des ascenseurs (SitePathLink=Elevator) qui peuvent être modélisés par un ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud ou un ![way picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_way.svg/20px-Osm_element_way.svg.png) chemin.

Les noeuds d'origine et de destination doivent correspondre au début d'un autre SitePathLink ou être un entrée (Entrance=*), un équipement (Amenity=*) ou une place de parking (ParkingBay=*)

### Valeurs

| Clef         | Valeur          | Description                                                                                                         |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------------------- |
| SitePathLink | Pavement        | un trottoir                                                                                                         |
| SitePathLink | Footpath        | un chemin piéton, une voie cyclable partagée avec les piétons                                                       |
| SitePathLink | Street          | une rue piétonne, une voie de parking ou une impasse sans trottoir où les piétons sont tolérés                      |
| SitePathLink | OpenSpace       | une place piétonne                                                                                                  |
| SitePathLink | Concourse       | rue couverte, traboule                                                                                              |
| SitePathLink | Passage         | passage étroit, ruelle étroite                                                                                      |
| SitePathLink | Stairs          | un escalier                                                                                                         |
| SitePathLink | Escalator       | un escalator                                                                                                        |
| SitePathLink | Travelator      | un tapis roulant                                                                                                    |
| SitePathLink | Ramp            | une rampe d'accès, structure en pente permettant de franchir une dénivellation, un changement de niveau ou d'étage. |
| SitePathLink | Crossing        | un passage piéton, un passage à niveau pour les piétons, ou une traversée                                           |
| SitePathLink | Hall            | un cheminement en intérieur, dans une salle ou un hall                                                              |
| SitePathLink | Corridor        | un cheminement en intérieur dans un couloir, etc                                                                    |
| SitePathLink | QueueManagement | un cheminement dédié à une file d'attente, la gestion de queue                                                      |
| SitePathLink | Quay            | un quai de tram, de bus, etc                                                                                        |



### Tags fréquents

| Clef                | Description                                                            | Contraintes sur la valeur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Exemple                           |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| Name                | le nom si pertinent (par exemple pour les rues piétonnes)              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Name = Chemin Forestier des Dames |
| WheelchairAccess    | indique si l'access possible en fauteuil roulant                       | Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag WheelchairAccess:Description)                                                                                                                                                                                                                                                                                                                                                                                                                                | WheelchairAccess = Yes            |
| Tilt                | Dévers en pourcentage ou en degré. TODO valeurs négatives autorisées ? | préciser l'unité (% ou deg) dans le champ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Tilt = 2% <br> Tilt = 12deg       |
| Slope               | Pente en pourcentage ou en degré  TODO valeurs négatives autorisées ?  | préciser l'unité (% ou deg) dans le champ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Slope = 2% <br> Slope = 12deg     |
| HighwayType         | type de voie d’après le schéma direction de la voirie français         | Valeurs autorisées : <br>- Street (voie classique : rue, avenue, boulevard) <br>- LimitedSpeedStreet (zone 30) <br>- LivingStreet (zone de rencontre) <br>- Pedestrian (rue piétonne, aire piétonne, sente piétonne) <br>- Bicycle (voie verte) <br>- Unclassified (autre type de voie inscrit au schéma directeur de la voirie)                                                                                                                                                                                                                                         | HighwayType=LivingStreet          |
| Width               | largeur utile de passage                                               | En mètre arrondi au mètre. </br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Width = 24                        |
| StructureType       | type de passage                                                        | Si non renseigné, on suppose que StructureType = Pathway.<br>Valeurs autorisées : <br> - Pathway (sentier) <br> - Overpass (passerelle, pont),  <br> - Underpass (passage sous-terrain) <br> - Tunnel (tunnel)<br> - Corridor (couloir)                                                                                                                                                                                                                                                                                                                                  | StructureType=Tunnel              |
| Outdoor             | couverture du cheminement                                              | Valeurs autorisées : <br> - Yes  (extérieur non couvert) <br> - No (intérieur) <br> - Covered (extérieur couvert)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Outdoor=No                        |
| Incline             | sens du déplacement, dans le sens du tracé                             | Valeurs autorisées : <br> - Up (ça monte)<br> - Down (ça descend)<br> -No (pas de changement de niveau)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Incline=Down                      |
| FlooringMaterial    | matériau de revêtement au sol                                          | Valeurs autorisées : <br>- Asphalt (asphalte) <br>- Concrete (béton) <br>- Wood (bois) <br>- Dirt (terre) <br>- Gravel (graviers) <br>- Grass (gazon) <br>- CeramicTiles (carrelage) <br>- PlasticMatting (matière plastique) <br>- SteelPlate (plaques métalliques) <br>- Sand (sable stabilisé) <br>- Stone (pierre) <br>- Carpet (tapis) <br>- Rubber (caoutchouc) <br>- Cork (liège) <br>- FibreglassGrating (taillebotis en fibre de verre) <br>- GlazedCeramicTiles (carreaux de céramique émaillés) <br>- Vinyl (vinyle) <br>- Uneven (matériau inégal par nature) | FlooringMaterial=Asphalt          |
| Flooring            | état du revêtement                                                     | Valeurs autorisées : <br>- None (pas de revêtement) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat)                                                                                                                                                                                                                                                                                            | Flooring:Status = Worn            |
| TactileGuidingStrip | bande de guidage podotactile                                           | Valeurs autorisées : <br> - Yes (oui), <br> - No (non)                                                                                                                                                                                                                                                                                                                              |
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


Remarque : on peut en complément ajouter des tags sur les ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeuds extrémités pour indiquer la hauteur du ressaut (KerbHeight) ou encore la présende de Bande d'Éveil de Vigilance (BEV). Si on souhaite modéliser un abaissement du trottoir avant la traverser,, on peut découper le SitePathLink et renseigner la pente (Slope) ainsi que la largeur sur laquelle la hauteur de bordure de trottoir est réduite (Width).

#### Tags complémentaires des SitePathLink = Elevator

| Clef | Description | Contraintes sur la valeur |
| ---- | ----------- | ------------------------- |
| Depth | longueur de la cabine. Rappel : Width correspond à la largeur utile, donc la largeur de la porte |en mètres |
| InternalWidth | largeur de la cabine. Rappel : Width correspond à la largeur utile, donc la largeur de la porte |en mètres |
| RaisedButtons | Signale si les boutons de l'ascenseur sont en relief (au moins le rez-de-chaussée) |Valeurs autorisées : <br> - Yes <br> - No  |
| AcousticAnnouncements | Signale si l'ascenseur est équipé d'un mécanisme d'annonces sonores de l'étage |Valeurs autorisées : <br> - Yes <br> - No  |
| MagneticInductionLoop | Signale la présence d'un équipement boucle à induction magnétique (BIM) |Valeurs autorisées : <br> - Yes <br> - No  |
| MirrorOnOppositeSide | Signale la présence d’un miroir en face de l’ascenceur |Valeurs autorisées : <br> - Yes <br> - No  |
| AutomaticDoor | signale si la porte s'ouvre automatiquement |Valeurs autorisées : <br> - Yes <br> - No  |
| Attendant | signale s’il y a un préposé à l’ascenseur |Valeurs autorisées : <br> - Yes <br> - No (il peut être utilisé en autonomie) |

### Tags complémentaires des SitePathLink

Les tags suivants peuvent également être présents sur certains objets SitePathLink.

| Clef     | Description                                                                    | Contraintes sur la valeur                                                                                                                                  | SitePathLink concernés       |
| -------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Handrail | présence d'une main courante sur laquelle on peut poser la main pour s'appuyer | Valeurs autorisées : <br> - Right (à droite uniquement)  <br> - Left (à gauche uniquement)  <br> - Both (des deux côtés) <br> - None (pas de main courante) | Ramp, Stairs, Elevator |
| StepCount | nombre de marches. dans le cas d'un escalier avec plusieurs volées de marches, c'est le nombre de marches total | Nombre entier positif | Stairs |
| StairFlightCount | nombre de volées de marches. <br>Si non renseigné, on suppose que StairFlightCount=0 | Nombre entier positif |  Stairs |
| StepColourContrast | état et présence de marches contrastées | Valeurs autorisées : <br>- None (pas de contraste) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat) | Stairs |
| StepHeight | hauteur de marche | en mètres arrondi au cm | Stairs |
| StoppedIfUnused| signale un tapis roulant ou escalator qui s'arrête lorsqu'il n'est pas utilisé, et doit être remis en marche par un détecteur automatique ou un bouton |  Valeurs autorisées : <br> - Yes <br> - No  | Escalator, Travelator |
| Conveying | indique la direction de déplacement d'un escalator ou tapis roulant par rapport au sens du tracé. Pour ces objets, si non renseigné, on suppose que Conveying=Forward | Valeurs autorisées : <br>- Forward (dans le sens du tracé) <br>- Backward (dans le sens opposé du tracé) <br>- Reversible (dans les deux sens) | Escalator, Travelator |
| Gated | indique s'il faut passer une porte pour emprunter ce cheminement | Si non renseigné, on suppose que Gated = No. <br> Valeurs autorisées : <br> - Yes (accès limité par une porte, etc) <br> - No (accès ouvert et libre) | principalement Hall |
|ManoeuvringDiameter |diamètre de la zone de manœuvre des usagers en fauteuil roulant. Pour les quais, mesuré une fois la palette ou la plate-forme élévatrice déployée | Décimal positif en mètre, arrondi au cm| Quay |
| AudibleSignals | indique si une signalétique auditive est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag AudibleSignals:Description) | |
| VisualSigns | indique si une signalétique visuelle est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag VisualSigns:Description) | |
| TransportMode | le mode de transport en commun | Valeurs autorisées : <br> - Bus <br> - Coach (car)  <br> - Tram (tramway) <br> - Water (ferry, bateau bus) <br> - Funicular, TrolleyBus, CableWay | Quay uniquement |
| PublicCode | un identifiant public local, par exemple un numéro de quai dans une gare routière |  | Quay uniquement |







# PointOfInterest = *

On utilisera PointOfInterest=* pour des points d'intérêts, tels que des commerces ou des gares.

S'utilise sur les ![area picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_area.svg/20px-Osm_element_area.svg.png) zones uniquement.

On tracera le contour de manière à englober tous les espaces intérieurs et extérieurs du lieu.

Chaque PointOfInterest devra avoir au moins une entrée, et pourra contenir des cheminements intérieurs (SitePathLink=Hall/Corridor) et des espaces intérieurs (InsideSpace=*)

### Valeurs


| Clef            | Valeur                  | Description                                                                   |
| --------------- | ----------------------- | ----------------------------------------------------------------------------- |
| PointOfInterest | Shop                    | Commerce, Magasins                                                            |
| PointOfInterest | Government              | Mairie, préfecture, service public, lieu administratif                        |
| PointOfInterest | Restaurant              | Restaurant, bar, café                                                         |
| PointOfInterest | Lodging                 | Hôtels                                                                        |
| PointOfInterest | Youth                   | École, crèche, centre de loisirs                                              |
| PointOfInterest | Library                 | Bibliothèque                                                                  |
| PointOfInterest | Healthcare              | Clinique, hôpital                                                             |
| PointOfInterest | Religion                | Mosquée, église                                                               |
| PointOfInterest | Bank                    | Banque                                                                        |
| PointOfInterest | Office                  | Bureaux                                                                       |
| PointOfInterest | Sport                   | Piscine couverte, salle polyvalente, gymnase, etc (établissemnt sportif clos) |
| PointOfInterest | Museum                  | Musée                                                                         |
| PointOfInterest | Game                    | Salle de danse et salle de jeux                                               |
| PointOfInterest | Exhibition              | Salle d’exposition                                                            |
| PointOfInterest | DisabledCare            | Structure d’accueil pour personnes handicapées                                |
| PointOfInterest | Senior                  | Maison de retraite                                                            |
| PointOfInterest | Theater                 | Théâtre, salles d'audition, salle de spectacles                               |
| PointOfInterest | OutdoorVenue            | Terrain de sport, stade, hippodrome                                           |
| PointOfInterest | StopPlace               | Gare, station                                                                 |
| PointOfInterest | ParkingLots             | Parc de stationnement couvert                                                 |
| PointOfInterest | MountainShelter         | Refuge de montagne  |
| PointOfInterest | AltitudeHotelRestaurant | Restaurant ou hôtel d’altitude | OA : Hôtels-restaurants d’Altitude |
| PointOfInterest | InflatableVenue | Château gonflable | SG : Structures Gonflables |

En complément, on pourra trouver un second tag précisant le type de point d'intérêt et reprenant pour clef la valeur du tag PointOfInterest : par exemple PointOfInterest=Government + Government=Townhall. La liste se trouve ci-dessous.

#### StopPlace = *

| Clef | Valeur | Description|
| ---- | ------ | ---------- |
| StopPlace | RailStation | Gare, station ferrée |
| StopPlace | MetroStation| Station de métro |
| StopPlace | BusStation | Gare routière |
| StopPlace | CoachStation | Gare routière de cars (longue distance, scolaire, etc). À utiliser uniquement s'il n'y a que des cars (sinon, préférer BusStation) |
| StopPlace | TramStation | Station de tramway. À utiliser uniquement pour une station séparée physiquement de la chaussée (ne pas tracer de StopPlace dans le cas de quais directement sur le trottoir) |
| StopPlace | FerryPort | Port de ferry, station de bateau-bus |
| StopPlace | LiftStation | Station de téléphérique |
| StopPlace | Airport | Aéroport|
| etc | etc | etc|

Remarque : on pourra également trouver des StopPlace=OnstreetBus ou OnstreetTram sur des ![relation picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_relation.svg/20px-Osm_element_relation.svg.png) relations. Il s'agit d'objets abstraits importés lors d'un import Netex et qu'on souhaite conserver lors de l'export Netex. Ils n'ont pas de tag PointOfInterest=StopPlace et il n'est pas nécessaire de renseigner d'information dessus.

#### Shop = *

| Clé   | Valeur             | Description                                |
| :---- | :----------------- | :----------------------------------------- |
| Shop  | Alcohol            | Magasin de vente d'alcool                  |
| Shop  | Antiques           | Antiquaire                                 |
| Shop  | Art                | Marchand d'art                             |
| Shop  | Bag                | Bagagerie                                  |
| Shop  | Bakery             | Boulangerie                                |
| Shop  | Beauty             | Salon de beauté                            |
| Shop  | Bed                | Magasin de literie                         |
| Shop  | Beverages          | Magasin de boissons                        |
| Shop  | Bicycle            | Magasin de vélos                           |
| Shop  | BoatRental         | Location de bateau                         |
| Shop  | Books              | Librairie                                  |
| Shop  | BureauDeChange     | Bureau de change                           |
| Shop  | Butcher            | Boucherie                                  |
| Shop  | Car                | Concessionnaire automobile                 |
| Shop  | CarParts           | Magasin de pièces automobiles              |
| Shop  | Carpet             | Magasin de tapis                           |
| Shop  | CarRental          | Location de voiture                        |
| Shop  | CarRepair          | Garage de réparation automobile            |
| Shop  | CarWash            | Station de lavage de voiture               |
| Shop  | Cheese             | Fromagerie                                 |
| Shop  | Chemist            | Parapharmacie                              |
| Shop  | Chocolate          | Chocolatier                                |
| Shop  | Clothes            | Magasin de vêtements                       |
| Shop  | Coffee             | Boutique de vente de cafés                 |
| Shop  | Computer           | Magasin d'informatique                     |
| Shop  | Confectionery      | Confiserie                                 |
| Shop  | Convenience        | Épicerie / Supérette                       |
| Shop  | Copyshop           | Photocopie et impression                   |
| Shop  | Cosmetics          | Magasin de cosmétiques                     |
| Shop  | Crematorium        | Crématorium                                |
| Shop  | Deli               | Épicerie fine                              |
| Shop  | DepartmentStore    | Grand magasin                              |
| Shop  | DoItYourself       | Magasin de bricolage                       |
| Shop  | DrivingSchool      | Auto-école                                 |
| Shop  | DryCleaning        | Pressing                                   |
| Shop  | Ecigarette         | Magasin de cigarettes électroniques        |
| Shop  | EstateAgent        | Agence immobilière                         |
| Shop  | Fabric             | Magasin de tissus                          |
| Shop  | Farm               | Magasin de producteurs                     |
| Shop  | Florist            | Fleuriste                                  |
| Shop  | FrozenFood         | Magasin de produits surgelés               |
| Shop  | Fuel               | Station-service                            |
| Shop  | FuneralDirectors   | Pompes funèbres                            |
| Shop  | Furniture          | Magasin de meubles                         |
| Shop  | Games              | Magasin de jeux de plateau                 |
| Shop  | GardenCentre       | Jardinerie                                 |
| Shop  | Gift               | Boutique de cadeaux                        |
| Shop  | Greengrocer        | Marchand de fruits et légumes              |
| Shop  | Guide              | Bureau des guides                          |
| Shop  | Hairdresser        | Salon de coiffure                          |
| Shop  | Hardware           | Quincaillerie                              |
| Shop  | HearingAids        | Audioprothésiste                           |
| Shop  | Hifi               | Magasin de matériel hi-fi                  |
| Shop  | Insurance          | Agence d'assurance                         |
| Shop  | InteriorDecoration | Magasin de décoration d'intérieur          |
| Shop  | InternetCafe       | Cybercafé                                  |
| Shop  | Jewelry            | Bijouterie                                 |
| Shop  | Kiosk              | Kiosque                                    |
| Shop  | Kitchen            | Cuisiniste                                 |
| Shop  | Laundry            | Laverie                                    |
| Shop  | Leather            | Maroquinerie                               |
| Shop  | Massage            | Salon de massage                           |
| Shop  | MedicalSupply      | Magasin de matériel médical                |
| Shop  | MobilePhone        | Magasin de téléphonie mobile               |
| Shop  | Motorcycle         | Magasin de motos                           |
| Shop  | MotorcycleRepair   | Réparateur de motos                        |
| Shop  | MovingCompany      | Entreprise de déménagement                 |
| Shop  | Music              | Magasin de musique                         |
| Shop  | Newsagent          | Kiosque à journaux                         |
| Shop  | Nightclub          | Boîte de nuit                              |
| Shop  | Optician           | Opticien                                   |
| Shop  | Outdoor            | Magasin de matériel de sports de plein air |
| Shop  | Pastry             | Pâtisserie                                 |
| Shop  | Perfumery          | Parfumerie                                 |
| Shop  | Pet                | Animalerie                                 |
| Shop  | Pharmacy           | Pharmacie                                  |
| Shop  | Seafood            | Poissonnerie / Vente de fruits de mer      |
| Shop  | SecondHand         | Magasin de produits d'occasion             |
| Shop  | Sewing             | Magasin de couture                         |
| Shop  | Shoes              | Magasin de chaussures                      |
| Shop  | Sports             | Magasin d'équipement sportif               |
| Shop  | Stationery         | Papeterie                                  |
| Shop  | Supermarket        | Supermarché                                |
| Shop  | Tattoo             | Salon de tatouage                          |
| Shop  | Tea                | Magasin de thés                            |
| Shop  | Ticket             | Boutique de vente de billets               |
| Shop  | Tobacco            | Bureau de tabac                            |
| Shop  | Toys               | Magasin de jouets                          |
| Shop  | TravelAgency       | Agence de voyages                          |
| Shop  | Variety_Store      | Magasin discount                           |
| Shop  | VehicleInspection  | Centre de contrôle technique               |
| Shop  | VideoGames         | Magasin de location et vente de jeux vidéo |
| Shop  | Watches            | Magasin de montres                         |

#### Government = *

| Clé        | Valeur                | Description            |
| :--------- | :-------------------- | :--------------------- |
| Government | CourtHouse            | Tribunal               |
| Government | Police                | Police, Gendarmerie    |
| Government | Post                  | Bureau de Poste        |
| Government | Tax                   | Centre des impôts      |
| Government | Townhall              | Mairie, hôtel de ville |
| Government | UnemploymentInsurance | Pôle Emploi            |

#### Restaurant = *

| Clé        | Valeur     | Description                      |
| :--------- | :--------- | :------------------------------- |
| Restaurant | Cafe       | Café                             |
| Restaurant | FastFood   | Restauration rapide              |
| Restaurant | FoodCourt  | Aire de restauration, food-court |
| Restaurant | IceCream   | Magasin de crèmes glacées        |
| Restaurant | Pub        | Pub                              |
| Restaurant | Restaurant | Restaurant                       |

#### Theater = *

| Clé     | Valeur  | Description |
| :------ | :------ | :---------- |
| Theater | Cinema  | Cinéma      |
| Theater | Theater | Théâtre     |

### Tags fréquents

| Clef | Description | Contraintes sur la valeur | PointOfInterest concernés |
| ---- | ----------- | ------------------------- | ------- |
| Name | nom du lieu | exemple : Name=Gare Routière de Torcy |  |
| TransportModes | modes de transport disponibles dans cette gare ou station | séparateur ; <br> Valeurs autorisées : <br> - Bus <br> - Coach (car)  <br> - Tram (tramway) <br> - Water (ferry, bateau bus)  <br> - Rail (train) <br> - Air (avion) <br> - Funicular, TrolleyBus, CableWay | uniquement StopPlace=* |
| WheelchairAccess |indique si l'accès est possible en fauteuil roulant | Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag WheelchairAccess:Description) |  |
| AudibleSignals | indique si une signalétique auditive est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag AudibleSignals:Description) | |
| VisualSigns | indique si une signalétique visuelle est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag VisualSigns:Description) | |
| Image | image, picto ou photo du lieu | URL valide ||
| Phone | numéro de téléphone | format international TODO ? ||
| `Ref:FR:SIRET` | Le numéro SIRET de l'aménageur issue de la base SIRENE des entreprises | Séquence de 14 chiffres, correspondant à un élément valide dans la base SIRENE de l'Insee ||
| Lighting | éclairage | Valeurs autorisées : <br> - Yes (éclairé et adapté aux déficients visuels) <br> - No (pas d'éclairage) <br> - Bad (éclairé mais non adapté pour les déficients visuels) |  |
| Outdoor | couverture du lieu | Valeurs autorisées : <br> - Yes  (extérieur non couvert) <br> - No (intérieur) <br> - Covered (extérieur couvert) | StopPlace=BusStation par exemple |
| Gated | indique s'il faut passer une porte pour accéder à ce point d'intérêt | <br> Valeurs autorisées : <br> - Yes <br> - No |  |

Plus tard :
* NearbyBicyclePark et NearbyCarPark ? (pour accessModes et aussi les facililities)
* NearbyDisabledCarPark ?? ou on zappe et on le fera par proximité avec un parking bay ?


### Autres tags trouvables sur ces objets
TODO

# Obstacle=*

Le tag Obstacle=* est utilisé sur un ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud pour représenter un obstacle au cheminement, qui peut gêner ou empecher la circulation.

Le ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud doit se trouver sur un ![way picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_way.svg/20px-Osm_element_way.svg.png) chemin SitePathLink.

Seuls les obstacles qui créent une gêne à la circulation doivent être cartographiés. Si la longueur de l'obstacle est supérieure à 3 mètres, on fera un SitePathLink dédié plutôt qu'on obstacle pour renseigner plus en détail les conditions de passage.

| Clef | Valeur | Description|
| ---- | ------ | ---------- |
| Obstacle | Kerb | ressaut ou marche |
| Obstacle | Bench | banc |
| Obstacle | Shelter | abri, abribus |
| Obstacle | Toilets | toilettes |
| Obstacle | Pole | poteau |
| Obstacle | PostBox | boîte aux lettres |
| Obstacle | Vegetation | arbre, haie |
| Obstacle | Turnstile | tourniquet |
| Obstacle | Bollard | poteau, borne |
| Obstacle | CycleBarrier | barrière sur la voie destinée à ralentir voire interdire l'accès aux vélos et engins motorisés |
| Obstacle | RoughSurface | surface irrégulière |

## Tags fréquents

| Clef | Description | Contraintes sur la valeur |
| -------- | -------- | -------- |
| ObstacleType | Type d'obstacle | Valeurs autorisées : <br> - Surface (obstacle en surface que l'on doit contourner) <br> - Ground (obstacle posé au sol que l'on doit contourner) <br> - Overhanging (obstacle en saillie, on peut le contourner ou passer en dessous) <br> - Pass (un passage sélectif, il faut passer au travers) |
| Width | largeur de l'obstacle (attention, il ne s'agit pas de la largeur de passage utile mais bien de la largeur de l'ostacle) | En mètres |
| Height | hauteur entre le sol et le haut de l'obstacle dans le cas d'un obstacle posé au sol, ou entre le sol et le bas de l'obstacle dans le cas d'un obstacle en saillie | En mètres |
| Length | longueur de l'obstacle. Si plus de 3 mètres, on tracera un SitePathLink dédié plutôt qu'on obstacle ponctuel | En mètres |
| Image | image, picto ou photo de l'obstacle | URL valide |

# Amenity=*

Le tag Amenity=* est utilisé sur un ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud pour représenter un équipement ou un aménagement.

Si cet équipement constitue également un obstacle à la circulation (par exemple un banc qui réduit l'espace disponible sur le trottoir) il doit également (ou en remplacement) avec un tag Obstacle=*.

S'il s'agit un équipement intérieur, il doit se situer à l'intérieur de la ![area picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_area.svg/20px-Osm_element_area.svg.png) zone  InsideSpace ou PointOfInterest qui le contient.

| Clef | Valeur | Description|
| ---- | ------ | ---------- |
| Amenity | ReceptionDesk | accueil, guichet d'un ERP |
| Amenity | TicketOffice | guichet permettant d'acheter des tickets. À utiliser dans les PointOfInterest=StopPlace |
| Amenity | Shelter | abri, abribus |
| Amenity | Toilets | sanitaires (peut aussi s'utiliser pour une douche ou un espace pour changer un bébé) |
| Amenity | EmergencyPhone | téléphone d'urgence. À utiliser dans les PointOfInterest=StopPlace |
| Amenity | RubbishDisposal | poubelle ou ensemble de poubelles |
| Amenity | LuggageLocker | casier à bagages, consigne |
| Amenity | TrolleyStand | stand de charriots |
| Amenity | Seating | banc ou ensemble de bancs |
| Amenity | Sign | panneau d'affichage, signalétique |
| Amenity | TicketValidator | validateur pour titre de transport. S'il s'agit d'une ligne de tourniquets, ajouter Obstacle=Turnstile et Entrance=* parce que c'est l'entrée d'une autre zone intérieure |
| Amenity | TicketVendingMachine | automate de vente de titre de transport |
| Amenity | MeetingPoint | point rencontre, point de rendez-vous|

# Entrance=*

Le tag Entrance=* est utilisé sur un ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud pour représenter une entrée. Il peut s'agir d'une entrée de batiment, mais aussi de l'entrée d'un point d'intérêt (par exemple une bouche de métro) ou encore de l'entrée d'un lieu intérieur.

Le ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud doit se trouver sur la ![area picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_area.svg/20px-Osm_element_area.svg.png) zone dont il est l'entrée (un POI ou un InsideSpace) et peut être relié à un ![way picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_way.svg/20px-Osm_element_way.svg.png) chemin SitePathLink.

Seules les entrées accessibles au public sont concernées (on ne cartographie pas les entrées de service, les entrées pour le personnel, etc).

| Clef | Valeur | Description|
| ---- | ------ | ---------- |
| Entrance | PointOfInterest | Entrée d'un point d'intérêt. Pour les gares, utiliser plutôt StopPlace |
| Entrance | StopPlace| Bouche de métro, entrée de gare |
| Entrance | Building | Entrée de bâtiment. S'il s'agit aussi de l'entrée du lieu, utilisé plutôt PointOfInterest |
| Entrance | InsideSpace | Entrée d'une pièce ou d'un espace intérieur |

## Tags fréquents

| Clef | Description | Contraintes sur la valeur |
| -------- | -------- | -------- |
| EntrancePassage | Type d'accès | Valeurs autorisées : <br> - Opening (pas de porte, accès libre) <br> - Door (porte) <br> - Gate (portail) <br> - Barrier (barrière) |
| IsEntry | indique s'il s'agit d'une entrée (par opposition à une sortie) |Valeur par défaut : Yes. <br>Valeurs autorisées : <br> - Yes (on peut entrer ici) <br> - No (on ne peut pas entrer ici) |
| IsExit | indique s'il s'agit d'une sortie (par opposition à une entrée) |Valeur par défaut : Yes. <br>Valeurs autorisées : <br> - Yes (on peut sortir ici) <br> - No (on ne peut pas sortir ici) |
| PublicCode | un identifiant public local, par exemple un numéro de sortie pour les bouches de métro |  |
| Name | un nom public local, par exemple un nom de sortie pour les bouches de métro |  |
| Width | largeur utile de passage | En mètres |
| Height | hauteur | En mètres |
| Door | caractéristiques de la porte principale de l'entrée |À ne renseigner que s'il y a une porte.<br>Valeurs autorisées : <br> - Hinged (porte classique)<br> - Sliding (coulissante)<br> - Revolving (Porte à tambour)<br> - Swing (Porte battante qui peut s'ouvrir dans les deux sens) |
| AutomaticDoor | indique si la porte est automatique |À ne renseigner que s'il y a une porte.<br>Valeurs autorisées : <br> - Yes <br> - No (il s'agit d'une porte manuelle) |
| DoorHandle | caractéristiques de la poignée de porte |À ne renseigner que s'il y a une porte.<br>Valeurs autorisées : <br> - None (pas de poignée) <br> - Lever (poignée à levier)<br> - Button (bouton)<br> - etc TODO |
| NecessaryForceToOpen | la force nécessaire pour ouvrir la porte |À ne renseigner que s'il y a une porte.<br>En Newton |

# ParkingBay=*

Le tag ParkingBay=* est utilisé sur un ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud pour représenter un place de parking.

Un ParkingBay doit être relié au reste du cheminement piéton par un SitePathLink.

| Clef | Valeur | Description|
| ---- | ------ | ---------- |
| ParkingBay | Disabled | une place de stationnement de voiture réservée aux personnes à mobilité réduite |

## Tags fréquents

| Clef | Description | Contraintes sur la valeur |
| -------- | -------- | -------- |
| BayGeometry | Type de stationnement | Valeurs autorisées : <br> - Orthogonal (perpendiculaire) <br> - Angled (en épis) <br> - Parallel (longitudinal) <br> - FreeFormat (libre) <br> - Unspecified (non précisé) |
| ParkingVisibility | Signalisation ou marquage au sol indiquant la spécificité du stationnement | Valeurs autorisées : <br> - Unmarked (non marqué) <br> -  SignageOnly (signalisation par panneau ou signalétique mais pas de marquage au sol) <br> -  MarkingOnly (marquage au sol uniquement) <br> -  Docks (démarquation physique) <br> -  Demarcated (marquage au sol et panneau) |
| FlooringMaterial | matériau de revêtement au sol | Valeurs autorisées : <br>- Asphalt (asphalte) <br>- Concrete (béton) <br>- Wood (bois) <br>- Dirt (terre) <br>- Gravel (graviers) <br>- Grass (gazon) <br>- CeramicTiles (carrelage) <br>- PlasticMatting (matière plastique) <br>- SteelPlate (plaques métalliques) <br>- Sand (sable stabilisé) <br>- Stone (pierre) <br>- Carpet (tapis) <br>- Rubber (caoutchouc) <br>- Cork (liège) <br>- FibreglassGrating (taillebotis en fibre de verre) <br>- GlazedCeramicTiles (carreaux de céramique émaillés) <br>- Vinyl (vinyle) <br>- Uneven (matériau inégal par nature) |
| Flooring | état du revêtement | Valeurs autorisées : <br>- None (pas de revêtement) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat) |
| Tilt | Dévers en pourcentage ou en degré. TODO valeurs négatives autorisées ? | préciser l'unité (% ou deg) dans le champ |
| Slope | Pente en pourcentage ou en degré  TODO valeurs négatives autorisées ?  | préciser l'unité (% ou deg) dans le champ |
| Length | longueur du stationnement | En mètres |
| Width | largeur du stationnement | En mètres |
| VehicleRecharging | indique si une prise pour recharger un véhicule électrique est disponible | Valeurs autorisées : <br> - Yes (oui), <br> - No (non)


# InsideSpace=*

Le tag InsideSpace=* est utilisé sur une ![area picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_area.svg/20px-Osm_element_area.svg.png) zone pour représenter une pièce ou un espace situé à l'intérieur d'un PointOfInterest.

Un InsideSpace doit avoir un ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeud Entrance sur son contour et être à l'intérieur d'une une ![area picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_area.svg/20px-Osm_element_area.svg.png) zone PointOfInterest (il peut partager des ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeuds).

Un InsideSpace peut contenir des SitePathLink et des Amenity.

| Clef | Valeur | Description|
| ---- | ------ | ---------- |
| InsideSpace | Room | une pièce conventionnelle avec murs, une cage d'ascenseur |
| InsideSpace | Area | un espace sans murs, intérieur ou extérieur |
| InsideSpace | Corridor | un couloir, un passage entre des pièces, une cage d'escalier |
| InsideSpace | Quay | un quai de métro, de train, représenté en surfacique. Uniquement à l'intérieur d'un PointOfInterest=StopPlace |

## Tags fréquents

| Clef | Description | Contraintes sur la valeur |
| -------- | -------- | -------- |
| WheelchairAccess | indique si l'access possible en fauteuil roulant | Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag WheelchairAccess:Description) |
| AudibleSignals | indique si une signalétique auditive est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag AudibleSignals:Description) |
| VisualSigns | indique si une signalétique visuelle est disponible |Valeurs autorisées : <br> - Yes (oui), <br> - No (non), <br>- Limited (partiellement, à préciser via le tag VisualSigns:Description) |
| TransportMode | le mode de transport en commun (pour Quay uniquement) | Valeurs autorisées : <br> - Rail (train) <br> - Metro <br> - Tram (tramway) |
| PublicCode | un identifiant public local (pour Quay uniquement) |  |

# Autres objets

## PathJunction=Yes

Les ![node picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_node.svg/20px-Osm_element_node.svg.png) noeuds qui font parti d'un SitePathLink peuvent avoir des tags propres :

| Clef                | Description                                                                                                                      | Contraintes sur la valeur    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- |
| PathJunction | Indique qu'il s'agit d'un noeud de cheminement | valeur fixe à "Yes" |
| Altitude | TODO | |
| KerbHeight | Hauteur du ressaut, à mesurer entre le haut de la bordure du trottoir et la chaussée | en mètres |
| TactileWarningStrip | Présence et état de la bande d'éveil vigilance (surface contrastée visuellement et tactilement permettant de signaler un danger) |Valeurs autorisées : <br>- None (pas de BEV) <br>- Good (bon état) <br>- Worn (dégradation sans gravité) <br>- Discomfortable (dégradation entraînant une difficulté d'usage ou d'inconfort) <br>- Hazardous (dégradation entraînant un problème de sécurité immédiat)  |
| TactileWarningStripInstallation | Implantation de la bande d'éveil vigilance |Valeurs autorisées : <br>- Usual <br>- Across (implantée en travers) <br>- Curved (implantée en courbe) <br>- InsufficientWidth (largeur insuffisante) <br>- TooLargeWidth (largeur trop importante) <br>- ShallowDepth (profondeur insuffisante) <br>- NonContrasting (non contrastée) |


## Relations StopPlace=*

On pourra trouver des ![relation picto](https://wiki.openstreetmap.org/w/images/thumb/4/48/Osm_element_relation.svg/20px-Osm_element_relation.svg.png) relations avec un attribut StopPlace.
Il s'agit d'objets abstraits importés lors d'un import Netex et qu'on souhaite conserver lors de l'export Netex. Ils n'ont pas de tag PointOfInterest=StopPlace et il n'est pas nécessaire de renseigner d'information dessus.

Les valeurs les plus fréquentes seront :

| Clef | Valeur | Description |
| -------- | -------- | -------- |
| StopPlace | OnstreetBus | un regroupement d'arrêts de bus proches, situés sur la voirie |
| StopPlace | OnstreetTram | un regroupement d'arrêts de tramway proches, sur la voirie et ne constituant pas une station de tramway |
| StopPlace | FerryStop | un regroupement d'arrêts de ferry proches ne constituant pas une station de ferry |
| StopPlace | Other | un autre regroupement d'arrêts de même mode |

Les relations contiennent comme membre un ou plusieurs objets Quay, sans rôle.

# Tags génériques

Les tags ci-dessous peuvent être trouvés sur n'importe quel type d'objet :
| Clef | Description | Exemple |
| ---- | ----------- | ------- |
| FixMe | une note indiquant que quelque chose est à corriger, à usage interne |         |
| Description | une description à usage du public |  |  |
| VisualSigns:Description | à renseigner obligatoirement et uniquement lorsque VisualSigns = Limited pour expliquer pourquoi la disponibilité n’est que partielle ||
| AudibleSignals:Description | à renseigner obligatoirement et uniquement lorsque AudibleSignals = Limited pour expliquer pourquoi la disponibilité n’est que partielle ||
| WheelchairAccess:Description | à renseigner obligatoirement et uniquement lorsque WheelchairAccess = Limited pour expliquer pourquoi l’accessibilité n’est que partielle | WheelchairAccess:Description = Un bollard empêche le passage en fauteil roulant |
| NonGeographicalLocation | à renseigner à "Yes" sur les éléments en intérieur dont la position exacte n'est pas connue (permet de ne pas exporter la position géographique dans les exports) | NonGeographicalLocation=Yes |

TODO : ajouter les ref:* pour conserver les id d'import

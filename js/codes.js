var codes = {
    "sc"	: "Artisanat",
    "sm"	: "Magie",
    "smt"	: "Magie d'Impact",
    "smtm"	: "Magie de Missile",
    "smtmr"	: "Magie Fondamentale",
    "smtmg"	: "Magie Atysienne",
    "smtmb"	: "Magie Céleste",
    "smto"	: "Magie Offensive",
    "smtod"	: "Magie Physique",
    "smtodp"	: "Magie Perforante",
    "smtodb"	: "Magie Contondante",
    "smtods"	: "Magie Tranchante",
    "smtoe"	: "Magie Elémentaire",
    "smtoec"	: "Magie du Froid",
    "smtoea"	: "Magie de l'Acide",
    "smtoer"	: "Magie de la Pourriture",
    "smtoef"	: "Magie du Feu",
    "smtoes"	: "Magie des Ondes de Choc",
    "smtoep"	: "Magie du Poison",
    "smtoee"	: "Magie Electrique",
    "smtc"	: "Magie Curative",
    "smtch"	: "Magie de Guérison",
    "smtchp"	: "Magie de Guérison de la Vie",
    "smtcht"	: "Magie de Guérison de la Sta",
    "smtcha"	: "Magie de Guérison de la Sève",
    "smtchc"	: "Magie de Guérison de la Concentration",
    "smtcb"	: "Rupture de Lien",
    "smtcbd"	: "Dégât de Rupture de Lien",
    "smtcbs"	: "Maladie de Rupture de Lien",
    "smtcbc"	: "Malédiction de Rupture de Lien",
    "sml"	: "Lien de Magie",
    "smlm"	: "Lien de Missile",
    "smlmr"	: "Lien Fondamental",
    "smlmg"	: "Lien Atysien",
    "smlmb"	: "Lien Céleste",
    "smlo"	: "Lien Offensif",
    "smlos"	: "Lien de Maladie",
    "smlosm"	: "Lien de Folie",
    "smloss"	: "Lien de Diminution de la Vitesse",
    "smlosr"	: "Lien de Diminution de la Résistance",
    "smlosk"	: "Lien de Diminution des Compétences",
    "smloc"	: "Lien de Malédiction",
    "smloci"	: "Lien d'Incapacité",
    "smlocm"	: "Lien de Perturbation Mentale",
    "smlocs"	: "Lien de Malchance",
    "smloch"	: "Lien de Haine",
    "smlod"	: "Lien Physique",
    "smlodp"	: "Lien Perforant",
    "smlodb"	: "Lien Contondant",
    "smlods"	: "Lien Tranchant",
    "smloe"	: "Lien Elémentaire",
    "smloec"	: "Lien du Froid",
    "smloea"	: "Lien d'Acide",
    "smloer"	: "Lien de Pourriture",
    "smloef"	: "Lien de Feu",
    "smloes"	: "Lien d'Ondes de Choc",
    "smloep"	: "Lien de Poison",
    "smloee"	: "Lien Electrique",
    "smlc"	: "Lien Curatif",
    "smlch"	: "Lien de Guérison",
    "smlchp"	: "Lien de Guérison de la Vie",
    "smlcht"	: "Lien de Guérison de la Sta",
    "smlcha"	: "Lien de Guérison de la Sève",
    "smlchc"	: "Lien de Guérison de la Concentration",
    "sma"	: "Magie Autonome",
    "smae"	: "Magie d'Enchantement",
    "smaes"	: "Enchantement de Sorts",
    "smaeb"	: "Enchantement Bonus",
    "smap"	: "Magie de Création de Potions",
    "sd"	: "Auto-Défense",
    "sda"	: "Porter Armure",
    "sdal"	: "Porter Armure Légère",
    "sdalf"	: "Porter Armure Légère Fyros",
    "sdalfa"	: "Expert en Port d'Armure Légère Fyros",
    "sdalfae"	: "Maître en Port d'Armure Légère Fyros",
    "sdalm"	: "Porter Armure Légère Matis",
    "sdalma"	: "Expert en Port d'Armure Légère Matis",
    "sdalmae"	: "Maître en Port d'Armure Légère Matis",
    "sdalt"	: "Porter Armure Légère Tryker",
    "sdalta"	: "Expert en Port d'Armure Légère Tryker",
    "sdaltae"	: "Maître en Port d'Armure Légère Tryker",
    "sdalz"	: "Porter Armure Légère Zoraï",
    "sdalza"	: "Expert en Port d'Armure Légère Zoraï",
    "sdalzae"	: "Maître en Port d'Armure Légère Zoraï",
    "sdam"	: "Porter Armure Moyenne",
    "sdamf"	: "Porter Armure Moyenne Fyros",
    "sdamfa"	: "Expert en Port d'Armure Moyenne Fyros",
    "sdamfae"	: "Maître en Port d'Armure Moyenne Fyros",
    "sdamm"	: "Porter Armure Moyenne Matis",
    "sdamma"	: "Expert en Port d'Armure Moyenne Matis",
    "sdammae"	: "Maître en Port d'Armure Moyenne Matis",
    "sdamt"	: "Porter Armure Moyenne Tryker",
    "sdamta"	: "Expert en Port d'Armure Moyenne Tryker",
    "sdamtae"	: "Maître en Port d'Armure Moyenne Tryker",
    "sdamz"	: "Porter Armure Moyenne Zoraï",
    "sdamza"	: "Expert en Port d'Armure Moyenne Zoraï",
    "sdamzae"	: "Maître en Port d'Armure Moyenne Zoraï",
    "sdah"	: "Porter Armure Lourde",
    "sdahf"	: "Porter Armure Lourde Fyros",
    "sdahfa"	: "Expert en Port d'Armure Lourde Fyros",
    "sdahfae"	: "Maître en Port d'Armure Lourde Fyros",
    "sdahm"	: "Porter Armure Lourde Matis",
    "sdahma"	: "Expert en Port d'Armure Lourde Matis",
    "sdahmae"	: "Maître en Port d'Armure Lourde Matis",
    "sdaht"	: "Porter Armure Lourde Tryker",
    "sdahta"	: "Expert en Port d'Armure Lourde Tryker",
    "sdahtae"	: "Maître en Port d'Armure Lourde Tryker",
    "sdahz"	: "Porter Armure Lourde Zoraï",
    "sdahza"	: "Expert en Port d'Armure Lourde Zoraï",
    "sdahzae"	: "Maître en Port d'Armure Lourde Zoraï",
    "sds"	: "Manier Boucliers",
    "sdsb"	: "Manier Rondache",
    "sdsbf"	: "Manier Rondache Fyros",
    "sdsbfa"	: "Expert en Maniement de Rondache Fyros",
    "sdsbfae"	: "Maître en Maniement de Rondache Fyros",
    "sdsbm"	: "Manier Rondache Matis",
    "sdsbma"	: "Expert en Maniement de Rondache Matis",
    "sdsbmae"	: "Maître en Maniement de Rondache Matis",
    "sdsbt"	: "Manier Rondache Tryker",
    "sdsbta"	: "Expert en Maniement de Rondache Tryker",
    "sdsbtae"	: "Maître en Maniement de Rondache Tryker",
    "sdsbz"	: "Manier Rondache Zoraï",
    "sdsbza"	: "Expert en Maniement de Rondache Zoraï",
    "sdsbzae"	: "Maître en Maniement de Rondache Zoraï",
    "sdss"	: "Manier Grand Bouclier",
    "sdssf"	: "Manier Grand Bouclier Fyros",
    "sdssfa"	: "Expert en Maniement de Grand Bouclier Fyros",
    "sdssfae"	: "Maître en Maniement de Grand Bouclier Fyros",
    "sdssm"	: "Manier Grand Bouclier Matis",
    "sdssma"	: "Expert en Maniement de Grand Bouclier Matis",
    "sdssmae"	: "Maître en Maniement de Grand Bouclier Matis",
    "sdsst"	: "Manier Grand Bouclier Tryker",
    "sdssta"	: "Expert en Maniement de Grand Bouclier Tryker",
    "sdsstae"	: "Maître en Maniement de Grand Bouclier Tryker",
    "sdssz"	: "Manier Grand Bouclier Zoraï",
    "sdssza"	: "Expert en Maniement de Grand Bouclier Zoraï",
    "sdsszae"	: "Maître en Maniement de Grand Bouclier Zoraï",
    "sdd"	: "Esquive",
    "sdda"	: "Esquive Rapide",
    "sddat"	: "Esquive Instinctive",
    "sddatm"	: "Expert en Esquive",
    "sddatme"	: "Maître en Esquive",
    "UKNOWN"	: "Compétence Inconnue",
    "uNKNOWN"	: "Compétence Inconnue",
    "sh"	: "Extraire les Matières Premières",
    "shf"	: "Prospection",
    "shff"	: "Prospection Forestière",
    "shffa"	: "Initié en Prospection Forestière",
    "shffae"	: "Expert en Prospection Forestière",
    "shffaem"	: "Maître en Prospection Forestière",
    "shfd"	: "Prospection Désertique",
    "shfda"	: "Initié en Prospection Désertique",
    "shfdae"	: "Expert en Prospection Désertique",
    "shfdaem"	: "Maître en Prospection Désertique",
    "shfj"	: "Prospection Jungle",
    "shfja"	: "Initié en Prospection de la Jungle",
    "shfjae"	: "Expert en Prospection de la Jungle",
    "shfjaem"	: "Maître en Prospection de la Jungle ",
    "shfl"	: "Prospection Lacustre",
    "shfla"	: "Initié en Prospection Lacustre",
    "shflae"	: "Expert en Prospection Lacustre",
    "shflaem"	: "Maître en Prospection Lacustre",
    "shfp"	: "Prospection des Primes Racines",
    "shfpa"	: "Initié en Prospection des Primes Racines",
    "shfpae"	: "Expert en Prospection des Primes Racines",
    "shfpaem"	: "Maître en Prospection des Primes Racines",
    "smtoeca"	: "Initié en Magie du Froid",
    "smtoeaa"	: "Initié en Magie d'Acide",
    "smtoera"	: "Initié en Magie de la Pourriture",
    "smtoefa"	: "Initié en Magie du Feu",
    "smtoesa"	: "Initié en Magie des Ondes de Choc",
    "smtoepa"	: "Initié en Magie du Poison",
    "smtoeea"	: "Initié en Magie Electrique",
    "smtchpa"	: "Initié en Magie de Guérison Vie",
    "smtchta"	: "Initié en Magie de Guérison Sta",
    "smtchaa"	: "Initié en Magie de Guérison Sève",
    "smtchca"	: "Initié en Magie de Guérison Concentration",
    "smlosma"	: "Initié en Lien de Folie",
    "smlossa"	: "Initié en Lien de Diminution de la Vitesse",
    "smlocia"	: "Initié en Lien d'Incapacité",
    "smlocsa"	: "Initié en Lien de Malchance",
    "smloeca"	: "Initié en Lien du Froid",
    "smloeaa"	: "Initié en Lien d'Acide",
    "smloera"	: "Initié en Lien de Pourriture",
    "smloefa"	: "Initié en Lien de Feu",
    "smloesa"	: "Initié en Lien d'Ondes de Choc",
    "smloepa"	: "Initié en Lien de Poison",
    "smloeea"	: "Initié en Lien électrique",
    "smd"	: "Magie Salvatrice",
    "smda"	: "Magie Neutralisante",
    "smdaa"	: "Initié en Magie Neutralisante",
    "smdaae"	: "Expert en Magie Neutralisante",
    "smdaaem"	: "Maître en Magie Neutralisante",
    "smdh"	: "Magie Curative",
    "smdha"	: "Initié en Magie Curative",
    "smdhae"	: "Expert en Magie Curative",
    "smdhaem"	: "Maître en Magie Curative",
    "smo"	: "Magie Destructrice",
    "smoa"	: "Magie Débilitante",
    "smoaa"	: "Initié en Magie Débilitante",
    "smoaae"	: "Expert en Magie Débilitante",
    "smoaaem"	: "Maître en Magie Débilitante",
    "smoe"	: "Magie Elémentaire",
    "smoea"	: "Initié en Magie Elémentaire",
    "smoeae"	: "Expert en Magie Elémentaire",
    "smoeaem"	: "Maître en Magie Elémentaire",
    "sms"	: "Magie sur Soi",
    "smss"	: "Magie sur Soi Instinctive",
    "smssa"	: "Initié en Magie sur Soi",
    "smssae"	: "Expert en Magie sur Soi",
    "smssaem"	: "Maître en Magie sur Soi",
    "sf"	: "Combat",
    "sfm"	: "Mêlée",
    "sfm1"	: "Manier Armes à une Main",
    "sfm1b"	: "Manier Armes à une Main Contondantes",
    "sfm1bm"	: "Manier Massue",
    "sfm1bme"	: "Manier Massue Electrique",
    "sfm1bmm"	: "Maître en Maniement des Massues",
    "sfm1bs"	: "Manier Bâton",
    "sfm1bsm"	: "Maître en Maniement des Bâtons",
    "sfm1p"	: "Manier Armes à une Main Perforantes",
    "sfm1ps"	: "Manier Lance",
    "sfm1pse"	: "Manier Lance Electrique",
    "sfm1psl"	: "Manier Lance Vivante",
    "sfm1psm"	: "Maître en Maniement des Lances",
    "sfm1s"	: "Manier Armes à une Main Tranchantes",
    "sfm1sa"	: "Manier Hache",
    "sfm1sab"	: "Manier Hache Ardente",
    "sfm1sam"	: "Maître en Maniement des Haches",
    "sfm1ss"	: "Manier Epée",
    "sfm1ssm"	: "Maître en Maniement des Epées",
    "sfm1ssw"	: "Manier Epée Ondulante",
    "sfm2"	: "Manier Armes à deux Mains",
    "sfm2b"	: "Manier Armes à deux Mains Contondantes",
    "sfm2bm"	: "Manier Massue à deux Mains",
    "sfm2bme"	: "Manier Massue à deux Mains Electrique ",
    "sfm2bmm"	: "Maître en Maniement des Massues à deux Mains",
    "sfm2p"	: "Manier Armes à deux Mains Perforantes",
    "sfm2pp"	: "Manier Pique",
    "sfm2ppl"	: "Manier Pique Vivante",
    "sfm2ppm"	: "Maître en Maniement de la Pique",
    "sfm2s"	: "Manier Armes à deux Mains Tranchantes",
    "sfm2sa"	: "Manier Hache à deux Mains",
    "sfm2sab"	: "Manier Hache Ardente à deux Mains",
    "sfm2sam"	: "Maître en Maniement des Haches à deux Mains",
    "sfm2ss"	: "Manier Epée à deux Mains",
    "sfm2ssb"	: "Manier Epée à deux Mains Ardente",
    "sfm2ssl"	: "Manier Epée à deux Mains Vivante",
    "sfm2ssm"	: "Maître en Maniement des Epées à deux Mains",
    "sfm2ssw"	: "Manier Epée à deux Mains Ondulante",
    "sfmc"	: "Combat Rapproché",
    "sfmca"	: "Initié en Combat Rapproché",
    "sfmcad"	: "Manier Dague",
    "sfmcadl"	: "Manier Dague Vivante",
    "sfmcadm"	: "Maître en Maniement de la Dague",
    "sfmcadw"	: "Manier Dague Ondulante",
    "sfmcah"	: "Expert en Combat à Mains Nues",
    "sfmcahm"	: "Maître en Combat à Mains Nues",
    "sfr"	: "Tir",
    "sfr1"	: "Tir à une Main",
    "sfr1a"	: "Initié au Tir à une Main",
    "sfr1ab"	: "Tir au Pistolet-Arbalète",
    "sfr1abm"	: "Maître en Tir au Pistolet-Arbalète",
    "sfr1abw"	: "Tir au Pistolet-Arbalète Ondulant",
    "sfr1ap"	: "Tir au Pistolet",
    "sfr1apl"	: "Tir au Pistolet Vivant",
    "sfr1apm"	: "Maître en Tir au Pistolet ",
    "sfr2"	: "Tir à deux Mains",
    "sfr2a"	: "Initié au Tir à deux Mains",
    "sfr2aa"	: "Tir à la Mitrailleuse",
    "sfr2aab"	: "Tir à la Mitrailleuse Ardente",
    "sfr2aam"	: "Maître en Tir à la Mitrailleuse",
    "sfr2ab"	: "Tir au Fusil-Arbalète",
    "sfr2abe"	: "Tir au Fusil-Arbalète Electrique",
    "sfr2abm"	: "Maître en Tir au Fusil-Arbalète",
    "sfr2al"	: "Tir au Lance-Grenades",
    "sfr2alb"	: "Tir au Lance-Grenades Ardent",
    "sfr2ale"	: "Tir au Lance-Grenades Electrique",
    "sfr2alm"	: "Maître en Tir au Lance-Grenades",
    "sfr2ar"	: "Tir au Fusil",
    "sfr2arl"	: "Tir au Fusil Vivant",
    "sfr2arm"	: "Maître en Tir au Fusil ",
    "sca"	: "Créer Armure",
    "scj"	: "Créer Bijou",
    "scm"	: "Créer Arme de Mêlée",
    "scr"	: "Créer Arme de Tir",
    "scah"	: "Créer Armure Lourde",
    "scal"	: "Créer Armure Légère",
    "scam"	: "Créer Armure Moyenne",
    "scas"	: "Créer Bouclier",
    "scja"	: "Créer Anneau de Cheville",
    "scjb"	: "Créer Bracelet",
    "scjd"	: "Créer Diadème",
    "scje"	: "Créer Boucle d'Oreille",
    "scjp"	: "Créer Pendentif",
    "scjr"	: "Créer Bague",
    "scm1"	: "Créer Arme de Mêlée à une Main",
    "scm2"	: "Créer Arme de Mêlée à deux Mains",
    "scr1"	: "Créer Arme de Tir à une Main",
    "scr2"	: "Créer Arme de Tir à deux Mains",
    "scahb"	: "Créer Bottes Lourdes",
    "scahg"	: "Créer Gants Lourds",
    "scahh"	: "Créer Casque Lourd",
    "scahp"	: "Créer Pantalon Lourd",
    "scahs"	: "Créer Manches Lourdes",
    "scahv"	: "Créer Gilet Lourd",
    "scalb"	: "Créer Bottes Légères",
    "scalg"	: "Créer Gants Légers",
    "scalp"	: "Créer Pantalon Léger",
    "scals"	: "Créer Manches Légères",
    "scalv"	: "Créer Gilet Léger",
    "scamb"	: "Créer Bottes Moyennes",
    "scamg"	: "Créer Gants Moyens",
    "scamp"	: "Créer Pantalon Moyen",
    "scams"	: "Créer Manches Moyennes",
    "scamv"	: "Créer Gilet Moyen",
    "scass"	: "Créer Grand Bouclier",
    "scasb"	: "Créer Rondache",
    "scjaa"	: "Initié en Création d'Anneau de Cheville",
    "scjba"	: "Initié en Création de Bracelet",
    "scjda"	: "Initié en Création de Diadème",
    "scjea"	: "Initié en Création de Boucle d'Oreille",
    "scjpa"	: "Initié en Création de Pendentif",
    "scjra"	: "Initié en Création de Bague",
    "scm1m"	: "Créer Massue",
    "scm1t"	: "Créer Bâton",
    "scm1p"	: "Créer Lance",
    "scm1a"	: "Créer Hache",
    "scm1s"	: "Créer Epée",
    "scm1d"	: "Créer Dague",
    "scm2m"	: "Créer Massue à deux Mains",
    "scm2p"	: "Créer Pique",
    "scm2a"	: "Créer Hache à deux Mains",
    "scm2s"	: "Créer Epée à deux Mains",
    "scr1b"	: "Créer Pistolet-Arbalète",
    "scr1p"	: "Créer Pistolet ",
    "scr2a"	: "Créer Mitrailleuse",
    "scr2b"	: "Créer Fusil-Arbalète",
    "scr2l"	: "Créer Lance-Grenades",
    "scr2r"	: "Créer Fusil ",
    "scahbe"	: "Expert en Création de Bottes Lourdes",
    "scahge"	: "Expert en Création de Gants Lourds",
    "scahhe"	: "Expert en Création de Casque Lourd",
    "scahpe"	: "Expert en Création de Pantalon Lourd",
    "scahse"	: "Expert en Création de Manches Lourdes",
    "scahve"	: "Expert en Création de Gilet Lourd",
    "scalbe"	: "Expert en Création de Bottes Légères",
    "scalge"	: "Expert en Création de Gants Légers",
    "scalpe"	: "Expert en Création de Pantalon Léger",
    "scalse"	: "Expert en Création de Manches Légères",
    "scalve"	: "Expert en Création de Gilet Léger",
    "scambe"	: "Expert en Création de Bottes Moyennes",
    "scamge"	: "Expert en Création de Gants Moyens",
    "scampe"	: "Expert en Création de Pantalon Moyen",
    "scamse"	: "Expert en Création de Manches Moyennes",
    "scamve"	: "Expert en Création de Gilet Moyen",
    "scasse"	: "Expert en Création de Bouclier",
    "scasbe"	: "Expert en Création de Rondache",
    "scjaae"	: "Expert en Création d'Anneau de Cheville",
    "scjbae"	: "Expert en Création de Bracelet",
    "scjdae"	: "Expert en Création de Diadème",
    "scjeae"	: "Expert en Création de Boucle d'Oreille",
    "scjpae"	: "Expert en Création de Pendentif",
    "scjrae"	: "Expert en Création de Bague",
    "scm1me"	: "Expert en Création de Massue",
    "scm1te"	: "Expert en Création de Bâton",
    "scm1pe"	: "Expert en Création de Lance",
    "scm1ae"	: "Expert en Création de Hache",
    "scm1se"	: "Expert en Création d'Epée",
    "scm1de"	: "Expert en Création de Dague",
    "scm2me"	: "Expert en Création de Massue à deux Mains",
    "scm2pe"	: "Expert en Création de Pique",
    "scm2ae"	: "Expert en Création de Hache à deux Mains",
    "scm2se"	: "Expert en Création d'Epée en deux Mains",
    "scr1be"	: "Expert en Création de Pistolet-Arbalète",
    "scr1pe"	: "Expert en Création de Pistolet",
    "scr2ae"	: "Expert en Création de Mitrailleuse",
    "scr2be"	: "Expert en Création de Fusil-Arbalète ",
    "scr2le"	: "Expert en Création de Lance-Grenades",
    "scr2re"	: "Expert en Création de Fusil ",
    "scahbem"	: "Maître en Création de Bottes Lourdes",
    "scahgem"	: "Maître en Création de Gants Lourds",
    "scahhem"	: "Maître en Création de Casque Lourd",
    "scahpem"	: "Maître en Création de Pantalon Lourd",
    "scahsem"	: "Maître en Création de Manches Lourdes",
    "scahvem"	: "Maître en Création de Gilet Lourd",
    "scalbem"	: "Maître en Création de Bottes Légères",
    "scalgem"	: "Maître en Création de Gants Légers",
    "scalpem"	: "Maître en Création de Pantalon Léger",
    "scalsem"	: "Maître en Création de manches Légères",
    "scalvem"	: "Maître en Création de Gilet Léger",
    "scambem"	: "Maître en Création de Bottes Moyennes",
    "scamgem"	: "Maître en Création de Gants Moyens",
    "scampem"	: "Maître en Création de Pantalon Moyens",
    "scamsem"	: "Maître en Création de Manches Moyennes",
    "scamvem"	: "Maître en Création de Gilet Moyen",
    "scassem"	: "Maître en Création de Bouclier",
    "scasbem"	: "Maître en Création de Rondache",
    "scjaaem"	: "Maître en Création d'Anneau de Cheville",
    "scjbaem"	: "Maître en Création de Bracelet",
    "scjdaem"	: "Maître en Création de Diadème",
    "scjeaem"	: "Maître en Création de Boucle d'Oreille",
    "scjpaem"	: "Maître en Création de Pendentif",
    "scjraem"	: "Maître en Création de Bague",
    "scm1mem"	: "Maître en Création de Massue",
    "scm1tem"	: "Maître en Création de Bâton",
    "scm1pem"	: "Maître en Création de Lance",
    "scm1aem"	: "Maître en Création de Hache",
    "scm1sem"	: "Maître en Création d'Epée",
    "scm1dem"	: "Maître en Création de Dague",
    "scm2mem"	: "Maître en Création de Massue à deux Mains",
    "scm2pem"	: "Maître en Création de Pique",
    "scm2aem"	: "Maître en Création de Hache à deux Mains",
    "scm2sem"	: "Maître en Création d'Epée en deux Mains",
    "scr1bem"	: "Maître en Création de Pistolet-Arbalète",
    "scr1pem"	: "Maître en Création de Pistolet",
    "scr2aem"	: "Maître en Création de Mitrailleuse",
    "scr2bem"	: "Maître en Création de Fusil-Arbalète ",
    "scr2lem"	: "Maître en Création de Lance-Grenades",
    "scr2rem"	: "Maître en Création de Fusil ",
    "scmc"	: "Créer Armes de Combat Rapproché",
    "scmca"	: "Initié en Création d'Armes de Combat Rapproché",
    "scmcae"	: "Expert en Création d'Armes de Combat Rapproché",
    "scmcaem"	: "Maître en Création d'Armes de Combat Rapproché",
    "kami"	: "Kami",
    "karavan"	: "Karavan",
    "fyros"	: "Fyros",
    "tryker"	: "Tryker",
    "matis"	: "Matis",
    "zorai"	: "Zoraï",
    "fight"	: "Combat",
    "magic"	: "Magie",
    "craft"	: "Artisanat",
    "harvest"	: "Récolte",
    "rpjob_200.sitem" : "Boucher",
    "rpjob_201.sitem" : "Fleuriste",
    "rpjob_202.sitem" : "Porteur d'eau",
    "rpjob_203.sitem" : "Cartographe en magnétisme",
    "rpjob_204.sitem" : "Outilleur",
    "rpjob_205.sitem" : "Secouriste",
    "rpjob_206.sitem" : "Larviculteur",
    "rpjob_207.sitem" : "Parcheminier"
};

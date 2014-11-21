// pour simplifier la lecture
function $(x) {return document.getElementById(x);}

// renvoie le texte correspondant au code en paramètre (ex : scja = créer anneau cheville)
function getNameByCode(code){ // prend en paramètre un String
    return codes[code];
}

// fait apparaître ou disparaître un élément (div...)
function afficher(object_id){
    var obj = $(object_id);
    
    if(obj.style.display == 'block'){
        obj.style.display='none';
    }else{
        obj.style.display='block';
    }
}

// sépare les millions, milliers... par un espace
function formatNb(nombre){
    nombre += '';
    var sep = ' ';
    var reg = /(\d+)(\d{3})/;
    while(reg.test(nombre)) {
      nombre = nombre.replace(reg, '$1' +sep +'$2');
    }
    return nombre;
}

var xhr = new XMLHttpRequest();
// si on voulait une compatibilité inter-navigateurs :
//try
//{
//   xhr = new ActiveXObject("Microsoft.XMLHTTP"); // Essayer IE
//}
//catch(e)   // Echec, utiliser l'objet standard
//{
//  xhr = new XMLHttpRequest();
//}

xhr.onreadystatechange  = function()
{
    if(xhr.readyState == 4) // Reçu, OK
    {
        if(xhr.status == 200){
                //  on assigne le fichier XML à une variable
                var doc = xhr.responseXML;

                // on récupère les différentes caractéristiques
                // on place les valeurs obtenues dans les "spans" correspondants
                var constitutionXML = doc.getElementsByTagName('constitution');
                var constitution = constitutionXML[0].firstChild.nodeValue;
                $('constitution').innerHTML = constitution;

                var metabolismeXML = doc.getElementsByTagName('metabolism');
                var metabolisme = metabolismeXML[0].firstChild.nodeValue;
                $('metabolisme').innerHTML = metabolisme;

                var intelligenceXML = doc.getElementsByTagName('intelligence');
                var intelligence = intelligenceXML[0].firstChild.nodeValue;
                $('intelligence').innerHTML = intelligence;

                var sagesseXML = doc.getElementsByTagName('wisdom');
                var sagesse = sagesseXML[0].firstChild.nodeValue;
                $('sagesse').innerHTML = sagesse;

                var forceXML = doc.getElementsByTagName('strength');
                var force = forceXML[0].firstChild.nodeValue;
                $('force').innerHTML = force;

                var equilibreXML = doc.getElementsByTagName('wellbalanced');
                var equilibre = equilibreXML[0].firstChild.nodeValue;
                $('equilibre').innerHTML = equilibre;

                var dexteriteXML = doc.getElementsByTagName('dexterity');
                var dexterite = dexteriteXML[0].firstChild.nodeValue;
                $('dexterite').innerHTML = dexterite;

                var volonteXML = doc.getElementsByTagName('will');
                var volonte = volonteXML[0].firstChild.nodeValue;
                $('volonte').innerHTML = volonte;
                
                // on récupère les points de vie, sève, etc. actuels, ainsi que leur base 
                // (= les points sans les bonus des équipements portés par ex)
                var ptsVieXML = doc.getElementsByTagName('hitpoints');
                var ptsVie = ptsVieXML[0].firstChild.nodeValue;
                $('pts_vie').innerHTML = ptsVie;
                // base :
                var basePtsVie = ptsVieXML[0].getAttribute("base");
                $('base_pts_vie').innerHTML = basePtsVie;
                
                var ptsSeveXML = doc.getElementsByTagName('sap');
                var ptsSeve = ptsSeveXML[0].firstChild.nodeValue;
                $('pts_seve').innerHTML = ptsSeve;
                // base :
                var basePtsSeve = ptsSeveXML[0].getAttribute("base");
                $('base_pts_seve').innerHTML = basePtsSeve;
                
                var ptsEnduranceXML = doc.getElementsByTagName('stamina');
                var ptsEndurance = ptsEnduranceXML[0].firstChild.nodeValue;
                $('pts_endurance').innerHTML = ptsEndurance;
                // base :
                var basePtsEndurance = ptsEnduranceXML[0].getAttribute("base");
                $('base_pts_endurance').innerHTML = basePtsEndurance;
                
                var ptsConcentrationXML = doc.getElementsByTagName('focus');
                var ptsConcentration = ptsConcentrationXML[0].firstChild.nodeValue;
                $('pts_concentration').innerHTML = ptsConcentration;
                // base :
                var basePtsConcentration = ptsConcentrationXML[0].getAttribute("base");
                $('base_pts_concentration').innerHTML = basePtsConcentration;
                
                // ---------------------------------------
                // pour les compétences
                var skills = doc.getElementsByTagName('skills'); // l'ensemble des balises nommées "skills"
                var skillsChildren = skills[0].childNodes; // les noeuds enfants de la seule balise "skills" skills[0]
                var nb_competences = skillsChildren.length; // le nb des noeuds
                var niveau_max = 0;
                var code_competence, nom_competence, nom_competence_max, 
                        niveau, niveau_tronque, prochain_niveau, texte_competence,
                        noeud_competence, paragraphe_competence;
                
                // on parcourt les compétences et
                // 1) on crée un paragraphe avec les infos pour chaque compétence existante
                // 2) on récupère le niveau max
                for (var i = 0 ; i < nb_competences ; i++) {
                    
                    // récupération des infos des compétences
                    code_competence = skillsChildren[i].nodeName; // nom de la balise
                    nom_competence = getNameByCode(code_competence); // nom de la compétence correspondant au code (abréviation) récupéré
                    niveau = doc.getElementsByTagName(code_competence)[0].firstChild.nodeValue; // valeur à l'intérieur de la balise
                    // niveau = skillsChildren[i].firstChild.nodeValue; // autre façon de faire (si on ne ne veut récupérer que les niveaux par ex.)
                    niveau_tronque = Math.floor(niveau); // valeur numérique du niveau tronquée
                    // on récupère le chiffre après la virgule pour obtenir le pourcentage d'avancement vers le niveau suivant
                    // on multiplie par 100 chacune des valeurs _au sein du calcul_, car le calcul sur des valeurs décimales est mal géré par JS...
                    prochain_niveau = Math.floor(niveau*100 - niveau_tronque*100); // Math.floor pour gérer les qqs cas où il y a des longues décimales

                    // inscription dans la page des infos sur les compétences
                    texte_competence = nom_competence + ' : ' + niveau_tronque + ' (' + prochain_niveau + ' %)';
                    //noeud_competence = document.createTextNode(texte_competence); => déplacé plus loin (le texte peut changer)
                    paragraphe_competence = document.createElement("p");
                    //paragraphe_competence.appendChild(noeud_competence); => déplacé plus loin (le texte peut changer)
                    
                    // le style commun à tous les paragraphes :
                    paragraphe_competence.classList.add("marge_haute_reduite");
                    
                    // le style qui dépend de l'échelon de la compétence (= la longueur du code de la compétence) :
                    switch(code_competence.length) {
                        case 3:
                            paragraphe_competence.classList.add("echelon_un");
                            break;
                        case 4:
                            paragraphe_competence.classList.add("echelon_deux");
                            break;
                        case 5:
                            paragraphe_competence.classList.add("echelon_trois");
                            break;
                        case 6:
                            paragraphe_competence.classList.add("echelon_quatre");
                            break;
                        case 7:
                            paragraphe_competence.classList.add("echelon_cinq");
                            break;
                        //default:
                    }
                    
                    // le style qui dépend des compétences suivantes débloquées :
                    // on regarde si parmi l'ensemble des compétences certaines commencent par le même code + au moins une autre lettre après
                    var code_competence_a_comparer;
                    var pattern = code_competence + '.+';
                    var regex = new RegExp(pattern);
                            
                    for (var j = 0 ; j < nb_competences ; j++) {
                        code_competence_a_comparer = skillsChildren[j].nodeName;
                        
                        if (regex.test(code_competence_a_comparer)){
                            // il y a des compétences "enfants"
                            paragraphe_competence.classList.add("vert");
                            paragraphe_competence.classList.add("gras");
                            // on supprime le " (0 %)' inutile
                            texte_competence = texte_competence.replace(" (0 %)", "");
                            
                            break; // on sort de la boucle à partir du moment où on est passé ici une fois
                        }
                    }
                    
                    // on crée un noeud avec le texte défini :
                    noeud_competence = document.createTextNode(texte_competence);
                    // appendChild du noeud créé :
                    paragraphe_competence.appendChild(noeud_competence);
                    
                    // appendChild du paragraphe créé :
                    $('contenu_competences').appendChild(paragraphe_competence);

                    // pour récupérer le niveau max
                    if(niveau > niveau_max){
                        niveau_max = niveau_tronque;
                        nom_competence_max = nom_competence;
                    } 
                }

                // on ajoute la compétence max avant la liste des compétences :
                var texte_competence_max = 'Niveau le plus élevé : ' + niveau_max + ' (' + nom_competence_max + ')';
                var noeud_competence_max = document.createTextNode(texte_competence_max);
                var paragraphe_competence_max = document.createElement("p");
                paragraphe_competence_max.appendChild(noeud_competence_max);
                // le style du paragraphe :
                paragraphe_competence_max.classList.add("marge_basse_augmentee");
                // syntaxe → node.insertBefore(newnode, existingchild);
                $('contenu_competences').insertBefore(paragraphe_competence_max, $('contenu_competences').firstChild);
                
                // ---------------------------------------
                // pour les renommées
                var fame = doc.getElementsByTagName('fame'); // l'ensemble des balises nommées "fame"
                var fameChildren = fame[0].childNodes; // les noeuds enfants de la seule balise "fame" fame[0]
                var nb_fames = 6; // attention, on ne s'intéresse volontairement qu'aux 6 premiers noeuds (factions et civilisations, pas tribus)
                var code_fame, nom_fame, valeur, pts, pts_palier_suivant, pts_palier_en_cours, prochain_point_renommee,
                        texte_renommee, texte_pts_renommee, texte_prochain_pt_renommee;
            
                // on parcourt les renommées et on renseigne les infos pour chacune
                for (var i = 0 ; i < nb_fames ; i++) {
                    // récupération des infos des renommées
                    code_fame = fameChildren[i].nodeName; // nom de la balise
                    nom_fame = getNameByCode(code_fame); // nom de la renommée correspondant au code (abréviation) récupéré
                    pts = fameChildren[i].firstChild.nodeValue; // valeur à l'intérieur de la balise
                    
                    // note : 6000 pts = 1 pt de renommée
                    if(pts >= 0){ // si les points sont positifs
                        // la valeur de la renommée correspond à la valeur entière des "pts" divisée par 6000 :
                        valeur = Math.floor(pts/6000);
                        
                        // pour les points vers la valeur suivante :
                        // on calcule les points nécessaires pour le palier suivant :
                        pts_palier_suivant = (valeur + 1) * 6000;
                        // on fait la différence entre les points requis et les points déjà acquis :
                        prochain_point_renommee = pts_palier_suivant - pts;
                
                    }else{ // si les points sont négatifs
                        // on fait le Math.floor sur la valeur absolue, et on rajoute le "moins" devant
                        // (car Math.floor donne l'entier inférieur ou égal le plus proche,
                        // donc -8.6 donnerait -9 et pas -8 comme dans le jeu)
                        valeur = -Math.floor(Math.abs(pts) / 6000);
                        
                        // pour les points vers la valeur suivante :
                        // par exemple -12800 donne "-2" et "-11999" donne -1 (=> il faudrait 801 pts pour passer le palier)
                        // on calcule les points nécessaires pour le palier EN COURS :
                        pts_palier_en_cours = valeur * 6000; // dans l'ex. -2 * 6000 = -12000
                        // on calcule la différence entre la valeur absolue des pts actuels 
                        // et celle des pts pour le palier en cours. On ajoute 1.
                        prochain_point_renommee = Math.abs(pts) - Math.abs(pts_palier_en_cours) + 1; // ds l'ex : 12800-12000+1=801
                        
                        // cas particulier quand on passe de -1 à zéro, je veux qu'on marque zéro 
                        // lorsque la valeur des points est réellement à zéro et non à -5999
                        // je rajoute 5999 au total trouvé
                        if(valeur == -1){
                            prochain_point_renommee += 5999;
                        }
                    }

                    // inscription dans la page des infos sur les renommées (on concatène pour avoir toutes les renommées)              
                    texte_renommee = nom_fame + " : " + valeur;
                    texte_pts_renommee = "Pts : " + formatNb(pts) + " ";
                    texte_prochain_pt_renommee = "(prochain pt : " + prochain_point_renommee + ")";
                    $('contenu_renommee').innerHTML += '<p><span class="vert gras">' +
                            texte_renommee + '</span><br><span class="precision">' +
                            texte_pts_renommee + ' <span class="precision">' +
                            texte_prochain_pt_renommee + '</span></span></p>';
                }
                
                // ---------------------------------------
                // pour les points de factions
                var factionPoints = doc.getElementsByTagName('factionpoints'); // l'ensemble des balises nommées "factionpoints"
                var factionPointsChildren = factionPoints[0].childNodes; // les noeuds enfants de la seule balise "factionpoints" factionpoints[0]
                var nbFactionPoints = factionPointsChildren.length; // le nb des noeuds
                var codeFactionPoints, nomFactionPoints, valeurFactionPoints;

                // on parcourt les infos des points de faction et on renseigne les infos pour chacune
                for (var i = 0 ; i < nbFactionPoints ; i++) {
                    // récupération des infos des pts de faction
                    codeFactionPoints = factionPointsChildren[i].nodeName; // nom de la balise
                    nomFactionPoints = getNameByCode(codeFactionPoints); // nom de la faction correspondant au code (abréviation) récupéré
                    valeurFactionPoints = factionPointsChildren[i].firstChild.nodeValue; // valeur à l'intérieur de la balise
              
                    // inscription dans la page des infos sur les pts de faction :
                    $('contenu_pts_faction').innerHTML += '<p><span class="vert gras">' +
                            nomFactionPoints + ' : </span>' +
                            valeurFactionPoints + '</p>';
                    
                    // alternative (tout en vert et gras) :
                    //texte_pts_faction = nomFactionPoints + ' : ' + valeurFactionPoints;
                    //noeud_pts_faction = document.createTextNode(texte_pts_faction);
                    //paragraphe_pts_faction = document.createElement("p");
                    //paragraphe_pts_faction.appendChild(noeud_pts_faction);
                    //paragraphe_pts_faction.classList.add("vert");
                    //paragraphe_pts_faction.classList.add("gras");
                    //$('contenu_pts_faction').appendChild(paragraphe_pts_faction);
                }
                
                // ---------------------------------------
                // pour les points de compétence
                var skillPoints = doc.getElementsByTagName('skillpoints'); // l'ensemble des balises nommées "skillpoints"
                var skillPointsChildren = skillPoints[0].childNodes; // les noeuds enfants de la seule balise "skillpoints" skillpoints[0]
                var nbSkillPoints = skillPointsChildren.length; // le nb des noeuds
                var codeSkillPoints, nomSkillPoints, valeurSkillPoints, valeurSpentSkillPoints, texte_pts_competence, texte_pts_competence_depenses;
            
                // on parcourt les infos des points de compétence et on renseigne les infos pour chacune
                for (var i = 0 ; i < nbSkillPoints ; i++) {
                    // récupération des pts de compétence
                    codeSkillPoints = skillPointsChildren[i].nodeName; // nom de la balise
                    nomSkillPoints = getNameByCode(codeSkillPoints); // nom de la compétence correspondant au code (abréviation) récupéré
                    valeurSkillPoints = skillPointsChildren[i].firstChild.nodeValue; // valeur à l'intérieur de la balise
                    // les pts déjà dépensés pour la compétence (attribut "spent")
                    valeurSpentSkillPoints = skillPointsChildren[i].getAttribute("spent");

                    // inscription dans la page des infos sur les pts de compétences (on concatène pour toutes les avoir)              
                    texte_pts_competence = nomSkillPoints + " : " + valeurSkillPoints;
                    texte_pts_competence_depenses = "Dépensés : " + valeurSpentSkillPoints;
                    $('contenu_pts_competence').innerHTML += '<p><span class="vert gras">' +
                            texte_pts_competence + '</span><br><span class="precision">' +
                            texte_pts_competence_depenses + ' <span class="precision"></p>';
                }
        }else{
            // document.ajax.dyn = "Error code " + xhr.status;
            $('erreur').innerHTML = "ERREUR (error code : " + xhr.status + ")<br><i>(Vérifiez que la connexion réseau est bien activée.)</i>";
        }
    }
}; 

var url = 'http://api.ryzom.com/character.php?apikey=' + key; // on concatène avec la clé du perso
xhr.open('GET', url, true); // true = asynchrone
xhr.send(null); // avec GET, toujours null




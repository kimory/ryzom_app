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
               
        }else{
            // document.ajax.dyn = "Error code " + xhr.status;
            $('erreur').innerHTML = "ERREUR (error code : " + xhr.status + ")<br><i>(Vérifiez que la connexion réseau est bien activée.)</i>";
        }
    }
}; 

var url = 'http://api.ryzom.com/character.php?apikey=' + key; // on concatène avec la clé du perso
xhr.open('GET', url, true); // true = asynchrone
xhr.send(null); // avec GET, toujours null




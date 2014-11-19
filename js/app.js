// pour simplifier la lecture :
function $(x) {return document.getElementById(x);}

// renvoie le texte correspondant au code en paramètre (ex : scja = créer anneau cheville)
function getNameByCode(code){ // prend en paramètre un String
    return codes[code];
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
                    prochain_niveau = (niveau*100 - niveau_tronque*100);

                    // inscription dans la page des infos sur les compétences
                    texte_competence = nom_competence + ' : ' + niveau_tronque + ' (' + prochain_niveau + ' %)';
                    noeud_competence = document.createTextNode(texte_competence);
                    paragraphe_competence = document.createElement("p");
                    paragraphe_competence.appendChild(noeud_competence);
                    $('competences').appendChild(paragraphe_competence);

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
                // syntaxe → node.insertBefore(newnode, existingchild);
                $('competences').insertBefore(paragraphe_competence_max, $('competences').firstChild);
               
        }else{
            // document.ajax.dyn = "Error code " + xhr.status;
            $('erreur').innerHTML = "ERREUR (error code : " + xhr.status + ")";
        }
    }
}; 

var url = 'http://api.ryzom.com/character.php?apikey=' + key; // on concatène avec la clé du perso
xhr.open('GET', url, true); // true = asynchrone
xhr.send(null); // avec GET, toujours null




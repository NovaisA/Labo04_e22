const path = require('path');
const fs = require ('fs');
console.log('Debut du programme');
fs.writeFile(path.join(__dirname, 'MesFichiers', 'bonjour.txt'),'Bonjour toute le monde',
      err=>{
    if(err)throw err;
    //sinon
    console.log('dossier bonjour.txt cree avec succes');
}
);

 fs.appendFile(path.join(__dirname, 'MesFichiers', 'bonjour.txt'),'Voici un changements',
 err=>{
if(err)throw err;
//sinon
console.log('dossier bonjour.txt changé avec succes');
}
);

//console.log("fin du programme");
//appendFile on ajout du contenu dans le fichier
//fs.appendFile

/**Paramètres:
1. Nom du fichier
2. Le texte à inscrire dans le fichier
3. La fonction callback après l’écriture */

/**Si je veux ajouter du texte dans le fichier:
 * avec la 2 commande le texte est ecrase par le dernier modif.
 */

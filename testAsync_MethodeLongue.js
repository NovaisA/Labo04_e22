const path = require('path');
const fs = require('fs');
console.log('debut du programme');
fs.readFile(path.join(__dirname, 'mesFichiers', 'toto.txt'),{ encoding:'utf-8' }, 
           (err, lignes) => {
            console.log(lignes)
        });// callBack cest la fonction que vas etre appeler quand read filve vas etre fini dexecuter 
console.log('fin du programme')

//assyncrone a besoin dune fonction avec 2 parametres
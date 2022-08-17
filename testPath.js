// pour chercher une librairie
// lien pour les path https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');

console.log('Affichage de path.basename', path.basename(__filename));
console.log('Affichage de path.basename', path.win32.dirname(__filename));
console.log('Affichage de path.basename', path.basename(__filename));


console.log('delimiter vaut', path.delimiter)
const partiesFichier = path.parse(__filename);
console.log(partiesFichier.name);
console.log('affiche',path.parse(__filename).ext);
console.log("construction dub chemin", path.join(__dirname, "mes Fichiers", "toto.txt"));
console.log("les separator est:", path.sep);

const fs = require ('fs');
fs.mkdirSync(path.join(__dirname, 'mesFichiers','test99'));
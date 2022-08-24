const path = require('path');
const fs = require ('fs');

console.log('Debut du programme');

fs.mkdirSync(path.join(__dirname, 'mesFichiers','test'),{});
console.log('dossier test1 cree avec sucess');

fs.mkdir(path.join(__dirname, 'MesFichiers', 'test2'),{},
      err=>{
    if(err)throw err;
    //sion
    console.log('dossier test2 cree avec succes')
}
);

console.log("fin du programme");
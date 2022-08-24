//pour y acceder le fichier logger
const Logger = require('./logger');

const logger = new Logger();

//logger.on('message',(objet)=> console.log('gestionaire a été appele', objet));
//logger.on('message',(objet)=> console.log('gestionaire a termine l/appel', objet));
logger.on('message',(objet)=> console.log('avertissement', objet));
logger.on('message',(objet)=> console.log('erreur', objet));
//logger.on('message',(objet)=> console.log('information', objet));

//logger.on('user',(objet)=> console.log('user', objet));
//logger.on('msg',(objet)=> console.log('msg', objet));
// avec le logger et testLogger juste besoin appelle logger.log
logger.log('joseph', 'truc machin');
logger.error('Bob', 'Voici un erreur ');

//logger.log('vous avez bien reussi');


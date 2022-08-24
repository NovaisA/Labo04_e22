//librarie events(Class)
const EventEmitter = require('events');
class MonEmeteurClasse extends EventEmitter {

    
};
//objet qui va servir à emettre un événement pour y affiche levenement 

const emeteur = new MonEmeteurClasse();
emeteur.on('evenement',() => {console.log('evenement est ON')});
emeteur.on('x', () => {console.log('X est on')});
emeteur.on('y', () => {console.log('y est on')});
emeteur.on('evenement',() => {console.log('evenement est ON')});
emeteur.on('z', () => {console.log('z est on')});
emeteur.on('w', () => {console.log('w est on')});

//gestion d'evenements
emeteur.emit('evenement');
emeteur.emit('x');
emeteur.emit('y');
emeteur.emit('evenement');
emeteur.emit('z');
emeteur.emit('w');










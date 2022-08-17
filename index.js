console.log("Voici un message"); 

const personne = require('./personne');
console.log(personne.nom);
console.log("tu as " + personne.age + "ans");


const Personne = require("./classPersonne");

const pier = new Personne('Pier-Luc', 42);
pier.salut();

// import personne from './personne'; eventuallment ca devrait change

var bob = new Personne('Bob Laure',38);
bob.salut();

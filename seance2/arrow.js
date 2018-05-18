// 5)
var arrow = (nombre, multiple) => nombre * multiple;

// 6)
let reponse6 = `Non, le "return" n'est pas obligatoire (voir code source)`;

// 7)
var arrow_2 = (nombre, multiple=2) => nombre * multiple;




/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("5) Utilisation de la fonction arrow :");
console.log("arrow(6, 8) -> " + arrow(6, 8));

console.log("\n---------------------\n");
console.log("6) Le mot clé retourne est obligatoire dans une fonction arrow ?");
console.log(reponse6);

console.log("\n---------------------\n");
console.log("7) Utilisation de la fonction arrow :");
console.log("arrow_2(6) -> " + arrow_2(6));

console.log("\n\n\n");
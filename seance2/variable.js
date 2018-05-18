// 1)
const constante = 2;

// 2)
let reponse2 = `	const contante =2;
	constante = 3; 
provoquera une erreur`;
// 3)
let reponse3 = `L'utilisation de let se fera
lorsque la variable est modifiable
et pour la contraindre à la closure`;

// 4)
let reponse4 = `let definie une variable
const définie une constante`;




/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("1) Déclaration d'une constante :");
console.log("const constante = " + constante);

console.log("\n---------------------\n");
console.log("2) Peux-t-on modifier la valeur d’une constante après ?");
console.log(reponse2);

console.log("\n---------------------\n");
console.log("3) Dans quel cas nous pouvons utiliser le mot clé let");
console.log(reponse3);

console.log("\n---------------------\n");
console.log("4) Quelle différence avons-nous entre un let et const ?");
console.log(reponse4);

console.log("\n\n\n");
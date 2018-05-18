// 8)
let reponse8 = `L'operator "..." (rest/spread) a deux utilisations :
	- dans la définition d'une fonction, elle rassemble 
	  les paramètres ajoutés lors de l'appel en un tableau
	- ailleurs, elle décompose un tableau en plusieurs variables`;


// 9)
function addition(num1, num2, ...rest){
	let allValues = [num1, num2, ...rest];
	let total = 0;
	allValues.forEach(function(number){
		total += number;
	});
	return total;
}

// 10)
var tableau = [1, 2, 3, 4];

// 11)
let reponse11 = `Cet opérateur est très utile car il supprime la limite 
du nombre d'arguments passés à une fonction tout en 
restant lisible (contrairement à d'autres langages comme PHP)`;




/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("8) Que veut dire les paramètres Rest et Spread Operator");
console.log(reponse8);

console.log("\n---------------------\n");
console.log("9) Utilisation du Rest dans la fonction :");
console.log(addition(1, 2, 3, 4));

console.log("\n---------------------\n");
console.log("10) Utilisation du spread :");
console.log(addition(...tableau));

console.log("\n---------------------\n");
console.log("11) Pourquoi il est intéressant d’utiliser les principes en Rest et Spread ?");
console.log(reponse11)

console.log("\n\n\n");
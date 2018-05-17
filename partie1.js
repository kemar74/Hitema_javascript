// 1
function arrow(){
	console.log("hello World");
}


// 2)
function withParameter(param){
	console.log(param);
}

// 3)
function multiply(number1, number2){
	return number1 * number2;
}


/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("1) Execution de arrow() : ");
arrow();

console.log("\n---------------------\n");
console.log("2) Appel de la fonction avec paramètre :");
var x = 42;
withParameter(x);

console.log("\n---------------------\n");
console.log("3) Multiplication de nombres : ");
var number1 = 8;
var number2 = 6;
console.log(number1 + " x " + number2 + " = " + multiply(number1, number2));
console.log("\n\n\n");
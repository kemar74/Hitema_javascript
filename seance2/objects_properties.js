const a = "hello world";
const b = [1, 2, 3];

// 16)
const obj = { a };
// 17)
const obj2 = { b };
// 18)
const obj3 = { obj, obj2 };

// 19)
const objComputed = { [a]: b };

// 20)
const objComputed_2 = { 
	[a]: b,
	maFunction() {
		return this[a];
	}
};


// 21)
const ids = {
	next: 0,
	get() {
		return this.next ++;
	}
};



function displayObject(obj){
	return JSON.stringify(obj);
}



/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("16) Objet : obj = " + displayObject(obj));

console.log("\n---------------------\n");
console.log("17) Objet : obj2 = " + displayObject(obj2));

console.log("\n---------------------\n");
console.log("18) Objet : obj3 = " + displayObject(obj3));

console.log("\n---------------------\n");
console.log("19) Objet : objComputed = " + displayObject(objComputed));

console.log("\n---------------------\n");
console.log("20) Objet : objComputed = " + displayObject(objComputed_2) + " (voir définition dans le code)");

console.log("\n---------------------\n");
console.log("21) Objet : ids = " + displayObject(ids) + " (voir définition dans le code)");

console.log("\n");
console.log("ids.get() -> " + ids.get());
console.log("ids.get() -> " + ids.get());
console.log("ids.get() -> " + ids.get());
console.log("ids.get() -> " + ids.get());
console.log("\n\n\n");
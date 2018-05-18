console.log("\n\n\n");


var list = [1, 2, 3];
let [a, b] = list;

console.log("22) a : " + a + " et b :" + b);

var film = {
	'nom': 'Forrest Gump',
	'Annee': 1994,
	'Durée': '2h20min',
	'Réalisateur': 'Robert Zemeckis',
	'Like': 100806
};

let {nom, "Annee": annee} = film;

console.log("23) nom : " + nom + " et annee : " + annee);

let {"Like" : likes} = film;

console.log("24) nombre de likes : " + likes);

function h({name, val}){
	console.log(name, val);
}

var obj = {name : 'mon objet', val : 'OK', autre : 'Nope'};
console.log("25) La fonction extrait les propriétés 'name' et 'val' de l'objet passé en paramètre et les affiche, exemple :");
h(obj);

function fonctionDestruct(obj){
	let {a} = obj;
	return a;
}
var obj2 = {name : 'mon objet', val : 'OK', a : 'Nope'};
console.log("26) Récupération de 'a' par la fonction : ", fonctionDestruct(obj2));

function fonctionDestruct2(obj){
	let {a, b} = obj;
	return {a, b};
}
var obj2 = {name : 'mon objet', a : 'OK', b : 'Nope'};
console.log("27) Récupération de 'a' et 'b' par la fonction : ", fonctionDestruct(obj2));


console.log("\n\n\n");
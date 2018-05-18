console.log("\n\n\n");


class MaClasse {

}

let maClasse = new MaClasse();

console.log("28) Definition de la classe MaClasse : ", maClasse);

class MaClasse2 {
	constructor(a, b){
		this.a = a;
		this.b = b;
	}

	affiche() {
		console.log(this.a * this.b);
	}
}

let maClasse2 = new MaClasse2(3, 6);

console.log("29) Definition de la classe MaClasse2 : ", maClasse2);
console.log(" - Affichage :");
maClasse2.affiche();

class Point {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	plus(point){
		return new Point(this.x + point.x, this.y + point.y);
	}
}

console.log("30) Résultat de la commande new Point(1, 2).plus(new Point(2, 1)) : ");
console.log(new Point(1, 2).plus(new Point(2, 1)));


console.log("\n\n\n");
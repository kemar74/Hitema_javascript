var film = {
	'nom' : 'Forrest Gump',
	'Annee': 1994,
	'Durée': '2h20min',
	'Réalisateur': 'Robert Zemeckis',
	'Like': 100806
};

// 4)
function year(p_film){
	return p_film.Annee;
}

// 5)
function doubleLikes(p_film){
	p_film.Like *= 2;
	return p_film;
}

// 6)
function isYearOver2000(p_film){
	return p_film.Annee > 2000;
}

// 7)
function isLikesOver1000(p_film){
	return p_film.Like > 1000;
}

// 8)
function addGenre(p_film, genre){
	if(!p_film.genres)
		p_film.genres = [];
	p_film.genres.push(genre);

	return p_film;
}

function displayObject(obj){
	return JSON.stringify(obj);
}



/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("Objet : film = " + displayObject(film));

console.log("\n---------------------\n");
console.log("4) Année du film :");
console.log(year(film));

console.log("\n---------------------\n");
console.log("5) Doubler les likes : ");
film = doubleLikes(film);
console.log("Nouvel objet : film = " + displayObject(film));

console.log("\n---------------------\n");
console.log("6) Année du film supérieure à 2000?");
console.log( (isYearOver2000(film) ? "Oui" : "Non") );

console.log("\n---------------------\n");
console.log("7) Nombre de likes supérieur à 1000?");
console.log( (isLikesOver1000(film) ? "Oui" : "Non") );

console.log("\n---------------------\n");
console.log("8) Ajout d'un genre au film :");
film = addGenre(film, 'Comédie romantique');
console.log("Nouvel objet : film = " + displayObject(film));
console.log("\n\n\n");
var films = [
	{
		'nom' : 'Forrest Gump',
		'Annee': 1994,
		'Durée': '2h20min',
		'Réalisateur': 'Robert Zemeckis',
		'Acteurs': ['Tom Hanks'],
		'Genres': ['Comédie dramatique', 'Romance'],
		'Like': 100806,
		'Privé' : true
	},
	{
		'nom' : 'Django Unchained',
		'Annee': 2013,
		'Durée': '2h44min',
		'Réalisateur': 'Quentin Tarentino',
		'Acteurs': ['Jamie Foxx', 'Christoph Waltz'],
		'Genres': ['Western'],
		'Like': 10030,
		'Privé' : true
	}
];

// 9)
function getNombreLikes(p_films){
	var total = 0;
	var likes = [];
	for(let i in films)
	{
		likes.push({ 'film': p_films[i].nom, 'nombre de likes': films[i].Like});
		total += films[i].Like;
	}
	likes.push({'Total' : total});
	return likes;
}

// 10)
function getAllGenres(p_films){
	var genres = [];
	for(let i in films)
		for(let j in films[i].Genres)
			genres.push(films[i].Genres[j]);

	return genres;
}

// 11)
function getAllFilmsPrives(p_films){
	var filmsPrives = [];
	for(let i in films)
		if(films[i]['Privé'])
			filmsPrives.push(films[i]);

	return filmsPrives;
}

// 12)
function mostRecentYear(p_films){
	var maxYear = -1;
	for(let i in films)
		if(films[i].Annee > maxYear)
			maxYear = films[i].Annee;

	return maxYear;
}


function displayObject(obj){
	return JSON.stringify(obj);
}


/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("Objet : films = " + displayObject(films));

console.log("\n---------------------\n");
console.log("9) Récupération du nombre de likes :");
console.log(displayObject(getNombreLikes(films)));

console.log("\n---------------------\n");
console.log("10) Récupération des genres utilisés : ");
console.log(displayObject(getAllGenres(films)));

console.log("\n---------------------\n");
console.log("11) Récupération des films \"privés\" :");
console.log(displayObject(getAllFilmsPrives(films)));

console.log("\n---------------------\n");
console.log("12) Année du film le plus récent : ");
console.log(mostRecentYear(films));
console.log("\n\n\n");

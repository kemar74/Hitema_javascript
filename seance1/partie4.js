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

// 13)
function getNombreFilmsByGenre(p_films, genre){
	var total = 0;
	for(let i in p_films)
		if(p_films[i].Genres.includes(genre))
			total ++;
	return total;
}
// 14)
function getNombreFilmsByActeur(p_films, acteur){
	var total = 0;
	for(let i in p_films)
		if(p_films[i].Acteurs.includes(acteur))
			total ++;
	return total;
}
// 15)
function getNombreFilmsByYearSuperior(p_films, year){
	var total = 0;
	for(let i in p_films)
		if(p_films[i].Annee > year)
			total ++;
	return total;
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
console.log("13) Nombre de films avec un genre :");
var genreDemande = "Western";
console.log("Genre : " + genreDemande + " => " + getNombreFilmsByGenre(films, genreDemande) + " film(s)");

console.log("\n---------------------\n");
console.log("14) Nombre de films avec un acteur : ");
var acteurDemande = "Jamie Foxx";
console.log("Acteur : " + acteurDemande + " => " + getNombreFilmsByActeur(films, acteurDemande) + " film(s)");

console.log("\n---------------------\n");
console.log("15) Nombre de film plus récent qu'une date :");
var dateDemandee = 2000;
console.log("Année : " + dateDemandee + " => " + getNombreFilmsByYearSuperior(films, dateDemandee) + " film(s)");
console.log("\n\n\n");

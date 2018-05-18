// 12)
var varHello = 'hello';
var varWorld = 'world';
var varHelloWorld = `${varHello} ${varWorld}`;

// 13)
var prenom = 'Marc';
var nom = 'Hartley';
var fullName = `${prenom} ${nom}`;

// 14)
const teamName = "tooling";
const people = [{name: "Jeannie", role: "senior"},
				{name: "Ronald", role: "junior"},
				{name: "Martin", role: "senior"},
				{name: "Anneli", role: "junior"}];

function countSeniors(people){
	var total = 0;
	people.forEach(function(person){
		if(person.role === "senior")
			total ++;
	}); 
	return total;
}
function getNames(people){
	var texte = "";
	for(var i = 0; i < people.length; i++){
		if(i > 0) texte += ", ";
		texte += people[i].name;
	}
	return texte;
}
let message = "There a " + people.length + " people on the " + teamName + " team.\n\
Their names are " + getNames(people) + "\n\
" + countSeniors(people) + " of them have a senior role.";

// 15)
let message_2 = `There a  ${people.length}  people on the  ${teamName}  team.
Their names are  ${ getNames(people) }
${ countSeniors(people) } of them have a senior role.`;

/*
	Ou de manière très concise :

	message_2 = `There a  ${people.length}  people on the  ${teamName}  team.
	Their names are  ${ people.map(function(person){return person.name;}).join(", ") }
	${ people.map(function(person){return (person.role === "senior" ? 1 : 0);}).reduce((a, b) => a + b) } of them have a senior role.`;
 */



/* 
	Partie tests
*/
console.log("\n\n\n");
console.log("12) Concatenation de deux variables :");
console.log(varHelloWorld);

console.log("\n---------------------\n");
console.log("13) Concatenation de deux variables :");
console.log(fullName);

console.log("\n---------------------\n");
console.log("14) Message sans templates strings :");
console.log(message)

console.log("\n---------------------\n");
console.log("15) Message sans templates strings :");
console.log(message_2)

console.log("\n\n\n");
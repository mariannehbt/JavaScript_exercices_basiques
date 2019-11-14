
//2.2.1 Calculs rapides
let userNumber = prompt('De quel nombre veux-tu calculer la factorielle ?');

let facTotal = 1
for(let count = 1; count <= userNumber; count++){
	facTotal *= count;
};

console.log("Le résultat est : " + facTotal);

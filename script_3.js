
//2.2.2 Pyramide de Mario
let userMario = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for(let count = 1; count <= userMario; count++){
	console.log((" ".repeat(userMario - count)) + ("#".repeat(count)));
};

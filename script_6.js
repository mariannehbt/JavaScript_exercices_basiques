
// 2.4.1. Codes la vie

console.log(".".repeat(30));
// ARN 1

// découpage de la suite de nucléotides en codons
let arn1 = "CCGUCGUUGCGCUACAGC";
console.log("arn1 : " + arn1)
let codons1 = arn1.toString().match(/.{3}/g).join('-');
console.log("codons1 : " + codons1);

const codonsArray1 = codons1.split("-");
console.log("codonsArray1 : ")
	console.log(codonsArray1)
	// console.log(codonsArray1[0]);
	// console.log(codonsArray1[1]);
	// console.log(codonsArray1[2]);
	// console.log(codonsArray1[3]);
	// console.log(codonsArray1[4]);
	// console.log(codonsArray1[5]);

// tableau de correspondance codonToAcideAmine
	// UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
	// CCU ou CCC ou CCA ou CCG => Proline
	// UUA ou UUG => Leucine
	// UUU ou UUC => Phénylalanine
	// CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
	// UAU ou UAC => Tyrosine

	let codonToAcideAmine = [
	{ aminoAcid: 'Sérine', cords: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'] },
	{ aminoAcid: 'Proline', cords: ['CCU','CCC', 'CCA', 'CCG'] },
    { aminoAcid: 'Leucine', cords: ['UUA', 'UUG'] },
    { aminoAcid: 'Phénylalanine', cords: ['UUU', 'UUC'] },
    { aminoAcid: 'Arginine', cords: ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'] },
    { aminoAcid: 'Tyrosine', cords: ['UAU', 'UAC'] }
    ];

// transformation de chaque codon en un "acide aminé"

acideAmineArray1 = []
codonsArray1.forEach(codon => {
	const resultat = codonToAcideAmine.find( acideAmine => acideAmine.cords.includes(codon));
	acideAmineArray1.push(resultat.aminoAcid);
});
console.log(acideAmineArray1.join("-"))

console.log(".".repeat(30));
// ARN 2

let arn2 = "CCUCGCCGGUACUUCUCG"
console.log("arn2 : "+ arn2)
let codons2 = arn2.toString().match(/.{3}/g).join('-');
console.log("codons2 : " + codons2);

const codonsArray2 = codons2.split('-');
console.log("codonsArray2 : ")
console.log(codonsArray2)

acideAmineArray2 = []
codonsArray2.forEach(codon => {
const resultat2 = codonToAcideAmine.find(acideAmine => acideAmine.cords.includes(codon));
acideAmineArray2.push(resultat2.aminoAcid);
});
console.log(acideAmineArray2.join("-"))

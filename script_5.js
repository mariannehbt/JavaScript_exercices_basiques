
// 2.3.2. Bibliothécaire

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("On commence par afficher l'array Books.")
console.log("Il y a : " + books.length + " livres")
books.forEach(book => {
  console.log(book)
});
console.log("*".repeat(15))

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Tous les livres ont-ils été empruntés au moins une fois ?");
books.forEach(book => {
  console.log(book.title + " => " + (book.rented >= 1) + " : "  + book.rented + " emprunts")
});
console.log("*".repeat(15))

// Quel est livre le plus emprunté ?
// On trie l'array :
// console.log(books.sort(function(a,b){
//     return a.rented - b.rented;
// }));

mostRented = (Math.max(...books.map(s => s.rented)));
let mostRentedBook = books.filter(book => book.rented === mostRented);
let mostRentedBookTitle = mostRentedBook.forEach(book => {console.log("Livre le plus emprunté : " + book.title + " avec " + mostRented + " prêts")})
console.log("*".repeat(15))

// Quel est le livre le moins emprunté ?
leastRented = (Math.min(...books.map(s => s.rented)));
let leastRentedBook = books.filter(book => book.rented === leastRented);
let leastRentedBookTitle = leastRentedBook.forEach(book => {console.log("Livre le moins emprunté : " + book.title + " avec " + leastRented + " prêts")})
console.log("*".repeat(15))

// Trouve le livre avec l'ID: 873495
idToFind = 873495
let bookToFind = books.filter(book => book.id === idToFind);
let bookToFindTitle = bookToFind.forEach(book => {console.log("Le livre avec l'id " + idToFind + " est " + book.title)})
console.log("*".repeat(15))

// Supprime le livre avec l'ID: 133712
idToFind2 = 133712
let bookToFind2 = books.filter(book => book.id === idToFind2);
let bookToFindTitle2 = bookToFind2.forEach(book => {console.log("Le livre avec l'id " + idToFind2 + " est " + book.title)})

const bookIndex = books.findIndex(book => book.id === idToFind2);
console.log("L'index de " + books[bookIndex].title + " est " + bookIndex);

console.log("On supprime le livre grâce à son index")
books.splice(bookIndex, 1)

console.log("Il y a maintenant : " + books.length + " livres")
books.forEach(book => {
  console.log(book)
});
console.log("*".repeat(15))

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
console.log("Livres triés par ordre alphabétique : ")
console.log(books.sort(function(a,b){
    return a.title.localeCompare(b.title);
}));
console.log("*".repeat(15))

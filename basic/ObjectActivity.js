const book={
    title:"abc of js",
    author:"xyz",
    year:2000
}
console.log(book.author)

book.publisher={
    name:"anand",
    city:"satara"
}
console.log(book.publisher.city)

const bookJason=JSON.stringify(book)
console.log(bookJason)
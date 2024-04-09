const movies = {
    title:"Harry Potter",
    author:"J.K.Rowling",
    genre:"Fantasy",
    year:2006,
    description:"Don't let the muggles get you down!"
}
const jsonMovies = JSON.stringify(movies, null, 2);
console.log(jsonMovies)
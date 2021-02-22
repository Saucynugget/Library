let myLibrary = [
    {
        name: "bohnanza",
        genre: "card",
        timesPlayed: 5
    }

];

function Game(name, genre, timesPlayed) {
    this.name = name
    this.genre = genre
    this.timesPlayed = timesPlayed
}

//const onitama = new Game("Onitama", "Abstract", 0)

function addBookToLibrary(game) {
   if (myLibrary.includes(game)){
       alert("Game is already in your library")
   }else{
   myLibrary.push(game)}
}


document.getElementById("addButton").addEventListener("click", function() {
    let name = document.getElementById("name")
    let genre = document.getElementById("genre")
    let timesPlayed = document.getElementById("timesPlayed")
    let game = new Game(name.value, genre.value, timesPlayed.value)
    addBookToLibrary(game)
});







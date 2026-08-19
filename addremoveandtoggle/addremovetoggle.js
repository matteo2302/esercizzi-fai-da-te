let games = [
    { name: "darksouls", year: 2010, difficulty: "easy", completed: true },
    { name: "darksouls2", year: 2015, difficulty: "hard", completed: true },
    { name: "darksouls3", year: 2017, difficulty: "medium", completed: true },

]
let newGame = [{ name: "bloodborne", year: 2014, difficulty: "very hard", completed: true }];
function addGame(games, newGame) {
    return games.concat(newGame)
}
let newGameList = addGame(games, newGame)
console.log(newGameList)
console.log(games)
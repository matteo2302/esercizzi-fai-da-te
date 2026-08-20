let games = [
    { id: 1, name: "darksouls", year: 2010, difficulty: "easy", completed: true },
    { id: 2, name: "darksouls2", year: 2015, difficulty: "hard", completed: true },
    { id: 3, name: "darksouls3", year: 2017, difficulty: "medium", completed: true },

]
console.log(games)



//add to a new array without mutating the original

let newGame = [{ id: 4, name: "bloodborne", year: 2014, difficulty: "very hard", completed: true }];
function addGame(games, newGame) {
    return games.concat(newGame)
}
let newGameList = addGame(games, newGame)
console.log(newGameList);



// removing an item from an array

/*function deleteGame(newGameList, 1) {
    return newGameList.slice(1);
}

newGameList = deleteGame(newGameList, 1);*/

function deleteGame(newGameList) {
    return newGameList.filter(game => game.id !== 2)

}

newGameList = deleteGame(newGameList)
console.log(newGameList)

function toggleGame(newGameList, id) {
    return newGameList.map(game => (
        { ...game, completed: game.id === 1 ? !game.completed : game.completed }
    ))
}

newGameList = toggleGame(newGameList)
console.log(newGameList)
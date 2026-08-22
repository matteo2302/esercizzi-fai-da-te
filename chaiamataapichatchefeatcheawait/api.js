async function findThePokemon() {
    try {
        let pokemonToFind = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
        let pokemon = await pokemonToFind.json();
        console.log(pokemon)
    } catch (error) {
        console.log(error)
    }
}
findThePokemon();

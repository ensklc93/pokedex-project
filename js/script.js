
let pokemonRepository = (function () {

    let pokemonList = [
        { name: 'Pikachu', height: 0.4, weight: 6, type: 'electric' },
        { name: 'Kadabra', height: 1.3, weight: 56.5, type: 'psychic ' },
        { name: 'Ho-oh', height: 3.8, weight: 199, type: ['fire', 'flying'] },
        { name: 'Mewtwo', height: 2.0, weight: 122, type: 'psychic' },
    ];

    function getAll() {
        return pokemonList;
    }

    function add(item) {
        // Bonus Task
        if (typeof item === 'object') {
            if (Object.hasOwn(item, 'name') && Object.hasOwn(item, 'height') && Object.hasOwn(item, 'weight') && Object.hasOwn(item, 'type')) {
                return pokemonList.push(item);
            }
        }
    }


    return {
        getAll: getAll,
        add: add
    }

})();

// Loop through pokemonList array
pokemonRepository.getAll().forEach((pokemon) => {
    if (pokemon.height >= 2) {
        // show objects (pokemon) with height over or equal to 2 and add a text to highlight. 
        document.write(`${pokemon.name} (Height: ${pokemon.height}, Weight: ${pokemon.weight}, Type: ${pokemon.type}) - Wow that's big! <br> `)
        // show all other objects (pokemon) 
    } else {
        document.write(`${pokemon.name} (Height: ${pokemon.height}, Weight: ${pokemon.weight}, Type: ${pokemon.type})<br>`)
    }
});

// Bonus Task
console.log(pokemonRepository.getAll().filter((pokemon) => pokemon.name === 'Mewtwo'));

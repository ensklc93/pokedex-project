let pokemonList = [
    { name: 'Pikachu', height: '0.4 m', weight: '6 kg', type: 'electric' },
    { name: 'Kadabra', height: '1.3 m', weight: '56.5 kg', type: 'pschic' },
    { name: 'Ho-oh', height: '3.8 m', weight: '199 kg', type: 'fire & flying' },
    { name: 'Mewtwo', height: '2.0 m', weight: '122 kg', type: 'psychic' },
];

// Loop through pokemonList array
pokemonList.forEach((pokemon) => {
    if (pokemon.height >= 2) {
        // show objects (pokemon) with height over or equal to 2 and add a text to highlight. 
        document.write(`${pokemon.name} (Height: ${pokemon.height}, Weight: ${pokemon.weight}, Type: ${pokemon.type}) - Wow that's big! <br> `)
        // show all other objects (pokemon) 
    } else {
        document.write(`${pokemon.name} (Height: ${pokemon.height}, Weight: ${pokemon.weight}, Type: ${pokemon.type})<br>`)
    }

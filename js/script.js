let pokemonList = [
    { name: 'Pikachu', height: '0.4 m', weight: '6 kg', type: 'electric' },
    { name: 'Kadabra', height: '1.3 m', weight: '56.5 kg', type: 'pschic' },
    { name: 'Ho-oh', height: '3.8 m', weight: '199 kg', type: 'fire & flying' },
    { name: 'Mewtwo', height: '2.0 m', weight: '122 kg', type: 'psychic' },
];

// Loop through pokemonList array
for (i = 0; i < pokemonList.length; i++) {
    // show objects (pokemon) with the tpye of 'electric' and add a text to highlight. 
    if(pokemonList[i].type === 'electric'){
    document.write(`${pokemonList[i].name} (Height: ${pokemonList[i].height}, Weight: ${pokemonList[i].weight}, Type: ${pokemonList[i].type}) - That's AC/DC !<br> `)
    // show all other objects (pokemon) 
    } else {
        document.write(`${pokemonList[i].name} (Height: ${pokemonList[i].height}, Weight: ${pokemonList[i].weight}, Type: ${pokemonList[i].type})<br>`)
    }
}


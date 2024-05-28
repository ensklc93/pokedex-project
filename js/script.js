
let pokemonRepository = (function () {

    let pokemonList = [
        { name: 'Pikachu', height: 0.4, weight: 6, type: ['electric'] },
        { name: 'Kadabra', height: 1.3, weight: 56.5, type: ['psychic'] },
        { name: 'Ho-oh', height: 3.8, weight: 199, type: ['fire', 'flying'] },
        { name: 'Mewtwo', height: 2.0, weight: 122, type: ['psychic'] },
    ];

    function getAll() {
        return pokemonList;
    }

    function add(item) {
        // Bonus Task
        if (typeof item === 'object') {
            if (Object.hasOwn(item, 'name') && Object.hasOwn(item, 'height') && Object.hasOwn(item, 'weight') && Object.hasOwn(item, 'type')) {
                return pokemonList.push(item);
            } else {
                alert('You have created an invalid pokemon. Please consider using "name, height, weight and type" to create a new pokemon!')
            }
        }
    }

    // Bonus Task
    function filter(pokemonName) {
        return pokemonList.filter((pokemon) => pokemon.name === pokemonName);
    }

    function addListItem(pokemon) {
        let pokemonUl = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('pokemon-button')
        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);
        button.addEventListener('click', function showDetails() {
            console.log(pokemon.name)
        })
    }

    return {
        getAll: getAll,
        add: add,
        filter: filter,
        addListItem: addListItem
    }

})();

// Loop through pokemonList array
pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon)
});


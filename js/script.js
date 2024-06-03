
let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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


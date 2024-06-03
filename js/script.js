
let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(item) {
    }

    function addListItem(pokemon) {
        let pokemonUl = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('pokemon-button')
        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);
        button.addEventListener('click', function showDetails(pokemon) {
            loadDetails(pokemon).then(function () {
                console.log(pokemon);
            });
        });
    }

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


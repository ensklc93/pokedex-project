
let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(item) {
        return pokemonList.push(item);
    }

    function addListItem(pokemon) {
        let pokemonUl = document.querySelector('.list-group')
        let listItem = document.createElement('li')
        listItem.classList.add('list-group-item')
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('btn', 'btn-dark')
        button.setAttribute('type', 'button')
        button.setAttribute('data-toggle', 'modal')
        button.setAttribute('data-target', '#pokedexModal')
        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);
        button.addEventListener('click', () => {
            showDetails(pokemon)
            modalBody.innerHTML = '';
            modalTitle.innerHTML = '';

        })
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    const modalBody = document.querySelector('.modal-body')
    const modalTitle = document.querySelector('.modal-title')
    const buttonClose = document.querySelector('.close')

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {

            modalTitle.textContent = item.name;
            buttonClose.textContent = 'X';

            let pokemonImage = document.createElement('img')
            pokemonImage.setAttribute('src', item.imageUrl)
            pokemonImage.classList.add('pokemon-image')


            let pokemonHeight = document.createElement('p');
            pokemonHeight.textContent = `Height: ${item.height}`;
            pokemonHeight.classList.add('pokemon-height');


            let pokemonType = document.createElement('p');
            pokemonType.textContent = `Types: ${item.types.map(element => element.type.name).join(", ")}`;
            pokemonType.classList.add('pokemon-type')

            modalBody.appendChild(pokemonImage);
            modalBody.appendChild(pokemonHeight);
            modalBody.appendChild(pokemonType);
        });
    }


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }

})();

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});


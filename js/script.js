
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
        let pokemonUl = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('pokemon-button')
        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);
        button.addEventListener('click', () => {
            showDetails(pokemon)
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

    const modalContainer = document.querySelector('#modal-container')

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            let modal = document.createElement('div');
            modal.classList.add('modal');

            let buttonClose = document.createElement('button')
            buttonClose.textContent = 'X';
            buttonClose.classList.add('button-close')
            buttonClose.addEventListener('click', () => {
                modalContainer.classList.remove('is-visible')
                modalContainer.innerHTML = '';
            })

            let pokemonImage = document.createElement('img')
            pokemonImage.setAttribute('src', item.imageUrl)
            pokemonImage.classList.add('pokemon-image')

            let h1 = document.createElement('h1');
            h1.textContent = item.name;
            h1.classList.add('pokemon-title')

            let pokemonHeight = document.createElement('p');
            pokemonHeight.textContent = `Height: ${item.height}`;
            pokemonHeight.classList.add('pokemon-height')


            let pokemonType = document.createElement('p');
            pokemonType.textContent = `Types: ${item.types.map(element => {
                return element.type.name                // I have tried to convert to string to make it appeal better but got some problems with it!!
            })};`
            pokemonType.classList.add('pokemon-type')


            modal.appendChild(h1);
            modal.appendChild(buttonClose)
            modal.appendChild(pokemonImage)
            modal.appendChild(pokemonHeight)
            modal.appendChild(pokemonType)
            modalContainer.appendChild(modal)

            modalContainer.classList.add('is-visible')
            modalContainer.addEventListener('click', (e) => {
                if(e.target == modalContainer && e.target != modal){
                    modalContainer.classList.remove('is-visible')
                    modalContainer.innerHTML = '';
                }
            })

            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    modalContainer.classList.remove('is-visible')
                    modalContainer.innerHTML = '';
                }
              })

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


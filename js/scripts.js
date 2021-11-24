// IIFE wrap pokemonList
let pokemonRepository = (function() {
// Pokemon information list
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
// making this global for all modal functions
  let modalContainer = document.querySelector('#modal-container');
  // add function
  function add(pokemon) {
    if (typeof pokemon === 'object') {
        pokemonList.push(pokemon);
      }else{
        alert('Not a valid entry')
      }
  }
  function getAll() {
    return pokemonList;
  }

// addListItem function assigning button list to HTML
  function addListItem(pokemon){
    let pokeList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let container = document.createElement("div");
    let button = document.createElement("button");
//puts each pokemon name in a button
    button.innerText = pokemon.name;
//adds a class to button and button container
    container.classList.add('container-class');
    button.classList.add("button-class");
//appending children to parent
    container.appendChild(button);
    listPokemon.appendChild(container);
    pokeList.appendChild(listPokemon);

    button.addEventListener('click', function (){
      showDetails(pokemon);
    });
  }

//fetching pokemon data from https://pokeapi.co/api/v2/pokemon/
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

//taking specific details from each pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  //console logging pokemon info fetched on button click
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    //clearing existing modal content
    modalContainer.innerHTML = '';
    //creating <div> in index and giving it a class
    let modal = document.createElement('div');
    modal.classList.add('modal');
    //giving modal a close button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height;

    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);


    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // adding escape key availability
  window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
  });

  // adding ability to close by clicking on the modal
  modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
  });

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadDetails: loadDetails,
    loadList: loadList
  }

})();

//Adding new pokemon entry
//pokemonRepository.add({name: 'Shelder', height: '0.6', weight: '2.3', type: ['water'], weakness: ['grass', 'electric'], evolutions: ['Cloyster']});

//forEach function to show pokemonRepository contents
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

//Old reference notes below

//document.write('<div ="pokeinfo">');
  // Part 1, Create a for loop that iterates over each pokemon item in the list
//for (let i = 0; i < pokemonList.length; i++){
//  document.write('<div class="pokeinfo__item"><h2>' + pokemonList[i].name + '</h2>');
//  document.write('<h3>Height: ' + pokemonList[i].height + '</h3>');
//  document.write('<h3>Weight: ' + pokemonList[i].weight + '</h3>');
//  document.write('<h3>Type: ' + pokemonList[i].type + '</h3>');
//  document.write('<h3>Weakness: ' + pokemonList[i].weakness + '</h3>');
//  document.write('<h3>Evolutions: ' + pokemonList[i].evolutions + '</h3>');
  // Part 3, add code to highlight special pokemon attributes.
//  if (pokemonList[i].height >= 1.5) {
//    document.write('<h3>  Pokedex: "Whoa! that\'s one big ' + pokemonList[i].name + '"</h3></div>');
  // Part 3 extra, added a else for practice
//  }else {
//    document.write('<h3>  Pokedex: "This is an average size ' + pokemonList[i].name + '"</h3></div>')
//  }
//}

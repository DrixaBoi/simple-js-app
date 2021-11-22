// IIFE wrap pokemonList
let pokemonRepository = (function() {
// Pokemon information list
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    let button = document.createElement("button");
//puts each pokemon name in a button
    button.innerText = pokemon.name;
//adds a class to button
    button.classList.add("button-class");
//appending children to parent
    listPokemon.appendChild(button);
    pokeList.appendChild(listPokemon);

    button.addEventListener('click', function (){
      showDetails(pokemon);
    });
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

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadDetails: loadDetails,
    loadList: loadList
  };
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

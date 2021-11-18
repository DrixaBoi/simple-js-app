// IIFE wrap pokemonList
let pokemonRepository = (function() {
// Pokemon information list
  let pokemonList = [
    {
      name: 'Sandshrew',
      height: 0.8,
      weight: 12,
      type: ['ground'],
      weakness: ['water', 'grass', 'ice'],
      evolutions: ['Sandslash']
    },
    {
      name: 'Vulpix',
      height: 0.6,
      weight: 9.9,
      type: ['fire'],
      weakness: ['water', 'ground', 'rock'],
      evolutions: ['Ninetails']
    },
    {
      name: 'Oddish',
      height: 0.7,
      weight: 5.4,
      type: ['grass', 'poison'],
      weakness: ['ground', 'psychic', 'flying', 'fire', 'ice'],
      evolutions: ['Gloom', 'Vileplume']
    },
    {
      name: 'Mankey',
      height: 1.4,
      weight: 28,
      type: ['fighting'],
      weakness: ['flying', 'psychic', 'fairy'],
      evolutions: ['Primeape']
    },
    {
      name: 'Abra',
      height: 1.5,
      weight: 19.5,
      type: ['psychic'],
      weakness: ['bug', 'ghost', 'dragon'],
      evolutions: ['Kadabra', 'Alakazam']
    }
  ];

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

  function showDetails(pokemon) {
   console.log(pokemon.name);
   console.log(pokemon.weight);
   console.log(pokemon.height);
   console.log(pokemon.type);
   console.log(pokemon.weakness);
   console.log(pokemon.evolutions);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

//Adding new pokemon entry
pokemonRepository.add({name: 'Shelder', height: '0.6', weight: '2.3', type: ['water'], weakness: ['grass', 'electric'], evolutions: ['Cloyster']});
//forEach function to show pokemonRepository contents
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
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

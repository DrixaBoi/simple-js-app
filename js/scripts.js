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

pokemonList.forEach(function(stats) {
  document.write('<div class="pokemon">' + stats.name + ' is ' + stats.height + ' feet tall, weighing in at ' + stats.weight + ' pounds!<br>' + stats.type + ' is its type, with weaknesses to ' + stats.weakness + '.<br>Its evolutions are: ' + stats.evolutions + '<br></div><br>');
});




//document.write('<div class="pokeinfo">');
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

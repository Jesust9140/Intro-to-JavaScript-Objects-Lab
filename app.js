const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  difficulty: "Med",
};

// Exercise 1: Inspecting the Array
console.log(pokemon[58].name);

// Exercise 2: Logging game Variable
console.log(game);

// Exercise 3: Adding difficulty Property
let Easy = "10";
let hard = "55";
let Med = "40";
game.difficulty = "Med";
console.log(game.difficulty); // Logs "Med"
console.log(Easy); // Logs "10"
console.log(hard); // Logs "55"
console.log(Med); // Logs "40"

// Exercise 4: Adding a Starter Pokémon to the Party
if (!game.party) {
  game.party = []; // Create the `party` array if it doesn't exist
}

const starterPokemon = pokemon.find(p => p.starter === true); // starter Pokémon
game.party.push(starterPokemon); // Add the starter Pokémon to the party
console.log(game.party);

// Exercise 5: Adding Three More Pokémon to the Party
const pokemon1 = pokemon.find(p => p.name === "Charmander"); // Fire type
const pokemon2 = pokemon.find(p => p.name === "Squirtle");   // Water type
const pokemon3 = pokemon.find(p => p.name === "Pikachu");    // Electric type

game.party.push(pokemon1, pokemon2, pokemon3); // Add them to the party
console.log(game.party);


// Alternative: Add Pokémon based on type or HP
const firePokemon = pokemon.find(p => p.type === "fire" && p.hp > 50);
const waterPokemon = pokemon.find(p => p.type === "water");
const strongPokemon = pokemon.find(p => p.hp > 80);

game.party.push(firePokemon, waterPokemon, strongPokemon); // Add them to the party
console.log(game.party); 



// Exercise 6: Updating Gym Completion Status
const gyms = [
  { name: "Pewter Gym", difficulty: 2, completed: false },
  { name: "Cerulean Gym", difficulty: 3, completed: false },
  { name: "Vermilion Gym", difficulty: 1, completed: false },
  { name: "Celadon Gym", difficulty: 4, completed: false },
];

for (let i = 0; i < gyms.length; i++) {
  if (gyms[i].difficulty < 3) {
    gyms[i].completed = true; //`completed` to true for gyms with difficulty < 3
  }
}

console.log(gyms); 
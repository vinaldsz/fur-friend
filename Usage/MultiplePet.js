// example-multiple-pets.js
import { User } from '../Solution/User.js';
import { GameManager } from '../Solution/GameManager.js';
import { PetSpecies } from '../Solution/PetSpecies.js';

// Add a new species
PetSpecies.addSpecies('Hamster');

// Create user with multiple pets
const user = new User('Alice');
const dog = user.adoptPet('Max', 'Dog');
const cat = user.adoptPet('Luna', 'Cat');
const hamster = user.adoptPet('Pip', 'Hamster');

// Demonstrate singleton pattern of GameManager
const gameManager1 = new GameManager();
const gameManager2 = new GameManager();
console.log(gameManager1 === gameManager2); // true

gameManager1.addUser(user);
console.log(`User has ${user.pets.length} pets`); // 3

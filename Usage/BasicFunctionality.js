import { User } from '../Solution/User.js';
import { GameManager } from '../Solution/GameManager.js';
import { InteractionHandler } from '../Solution/InteractionHandler.js';

// Initialize game
const gameManager = new GameManager();

// Create a user and adopt a pet
const user = new User('John');
const pet = user.adoptPet('Buddy', 'Dog');
gameManager.addUser(user);

// Basic interaction cycle
InteractionHandler.play(pet);
console.log(`${pet.name}'s happiness: ${pet.getStatus().happiness}`);

InteractionHandler.feed(pet);
console.log(`${pet.name}'s hunger: ${pet.getStatus().hunger}`);

InteractionHandler.rest(pet);
console.log(`${pet.name}'s energy: ${pet.getStatus().energy}`);
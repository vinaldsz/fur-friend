import { Pet } from '../Solution/Pet.js';
import { Dog } from '../Solution/Dog.js';
import { Cat } from '../Solution/Cat.js';
import { Rabbit } from '../Solution/Rabbit.js' // Importing classes

// Create instances of different pets
const myDog = new Dog('Buddy');
const myCat = new Cat('Whiskers');
const myRabbit = new Rabbit('Hoppy');

// Test polymorphism - Each pet makes a unique sound
console.log(myDog.makeSound());  // Buddy barks: Woof! Woof!
console.log(myCat.makeSound());  // Whiskers purrs: Meow~
console.log(myRabbit.makeSound()); // Hoppy twitches its nose quietly.

// Test subclass-specific methods
console.log(myDog.fetch());  // Buddy excitedly fetches the ball!
console.log(myCat.scratch()); // Whiskers scratches the furniture!
console.log(myRabbit.hop());  // Hoppy happily hops around!

// Test private fields using getter method
console.log(myDog.getSpecies());  // Dog
console.log(myCat.getSpecies());  // Cat

// Test PetStatus methods (assuming PetStatus exists)
console.log(myDog.getStatus());  // Displays pet's current status
myDog.updateStatus('play');  // Updates the status

console.log(myDog.getStatus());  // Check status after update



import { Pet } from './Pet.js';
import { PetStatus } from './PetStatus.js';

// Subclasses overriding `makeSound()`
export class Dog extends Pet {
    constructor(name) {
        const statusManager = new PetStatus();
        super(name, 'Dog', statusManager);
    }

    makeSound() {
        return `${this.name} barks: Woof! Woof!`;
    }

    fetch() {
        return `${this.name} excitedly fetches the ball!`;
    }
}
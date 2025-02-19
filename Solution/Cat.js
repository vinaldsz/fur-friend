import { Pet } from './Pet.js';
import { PetStatus } from './PetStatus.js';

export class Cat extends Pet{
    constructor(name) {
        const statusManager = new PetStatus();
        super(name, 'Cat', statusManager);
    }

    makeSound() {
        return `${this.name} purrs: Meow~`;
    }

    scratch() {
        return `${this.name} scratches the furniture!`;
    }
}
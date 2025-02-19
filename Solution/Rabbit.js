import { Pet } from './Pet.js';
import { PetStatus } from './PetStatus.js';

export class Rabbit extends Pet {
    constructor(name) {
        const statusManager = new PetStatus();
        super(name, 'Rabbit', statusManager);
    }

    makeSound() {
        return `${this.name} twitches its nose quietly.`;
    }

    hop() {
        return `${this.name} happily hops around!`;
    }
}
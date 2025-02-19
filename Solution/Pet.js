import { PetSpecies } from './PetSpecies.js';
import { PetStatus } from './PetStatus.js';

/**
 * Represents a virtual pet.
 */

export class Pet {
    /**
     * Creates a new pet.
     * @param {string} name - The name of the pet.
     * @param {string} species - The species of the pet.
     */
    constructor(name, species, StatusManager) {
      if (!PetSpecies.isValidSpecies(species)) {
            throw new Error('Invalid species');
        }
      this.name = name;
      this.#species = species;
      this.#status = StatusManager;
    }

    // Private properties (Encapsulation)
    #species;
    #status;

    getSpecies() {
      return this.#species;
    }
  
    getStatus() {
      return this.#status.getStatus();
    }

    updateStatus(activity) {
      this.#status.updateStatus(activity);
    }
    // Polymorphic method
    makeSound() {
      return `${this.name} makes a generic pet sound.`;
    }
  }
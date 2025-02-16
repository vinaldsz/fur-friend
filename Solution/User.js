import { PetFactory } from './PetFactory.js';

/**
 * Represents a user who can adopt pets.
 */
export class User {
    /**
     * Creates a new user.
     * @param {string} username - The username of the user.
     */
    constructor(username) {
      this.username = username;
      this.pets = [];
    }
  
    /**
     * Adopts a new pet with the given name and species.
     * @param {string} name - The name of the pet.
     * @param {string} species - The species of the pet.
     * @returns {Pet} The newly adopted pet.
     */
    adoptPet(name, species) {
      const pet = PetFactory.createPet(name, species);
      this.pets.push(pet);
      return pet;
    }
  }
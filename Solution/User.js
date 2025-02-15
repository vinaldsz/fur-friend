import { PetFactory } from './PetFactory.js';
export class User {
    constructor(username) {
      this.username = username;
      this.pets = [];
    }
  
    adoptPet(name, species) {
      const pet = PetFactory.createPet(name, species);
      this.pets.push(pet);
      return pet;
    }
  }
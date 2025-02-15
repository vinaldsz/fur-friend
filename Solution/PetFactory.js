import { Pet } from './Pet.js';
export class PetFactory {
    static createPet(name, species) {
      return new Pet(name, species);
    }
  }
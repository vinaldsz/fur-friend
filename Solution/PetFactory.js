import { Pet } from './Pet.js';
/**
 * Factory class for creating pet instances.
 */
export class PetFactory {
    static createPet(name, species) {
      return new Pet(name, species);
    }
  }
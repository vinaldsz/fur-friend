import { Pet } from './Pet.js';
import { PetStatus } from './PetStatus.js';
/**
 * Factory class for creating pet instances.
 */
export class PetFactory {
    static createPet(name, species) {
      const statusManager = new PetStatus();
      return new Pet(name, species, statusManager);
    }
  }
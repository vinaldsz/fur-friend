import { PetSpecies } from './PetSpecies.js';
import { PetStatus } from './PetStatus.js';

export class Pet {
    constructor(name, species) {
      if (!PetSpecies.isValidSpecies(species)) {
            throw new Error('Invalid species');
        }
      this.name = name;
      this.species = species;
      this.status = new PetStatus();
    }
  
    play() {
      this.status.updateStatus('play');
    }
  
    feed() {
      this.status.updateStatus('feed');
    }
  
    rest() {
      this.status.updateStatus('rest');
    }
  }
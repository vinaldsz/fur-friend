/**
* Handles various interactions with a virtual pet.
* Provides static methods for basic pet care activities like playing, feeding, and resting.
*/
export class InteractionHandler {
    /**
     * Plays with the pet, increasing happiness and decreasing energy. 
     * @param {Pet} pet - The pet instance to interact with
     * @throws {Error} If pet instance is invalid or play method is undefined
     */
    static play(pet) {
      pet.updateStatus('play');
      console.log(`${pet.name} is playing!`);
    }
  
    static feed(pet) {
      pet.updateStatus('feed');
      console.log(`${pet.name} is eating!`);
    }
  
    static rest(pet) {
      pet.updateStatus('rest');
      console.log(`${pet.name} is resting!`);
    }

    static cuddle(pet) {
      pet.updateStatus('cuddle');
  }

  static shareThoughts(pet) {
      pet.updateStatus('share thoughts');
  }
  }
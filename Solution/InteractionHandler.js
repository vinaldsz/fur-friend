export class InteractionHandler {
    static play(pet) {
      pet.play();
      console.log(`${pet.name} is playing!`);
    }
  
    static feed(pet) {
      pet.feed();
      console.log(`${pet.name} is eating!`);
    }
  
    static rest(pet) {
      pet.rest();
      console.log(`${pet.name} is resting!`);
    }

    static cuddle(pet) {
      pet.status.updateStatus('cuddle');
  }

  static shareThoughts(pet) {
      pet.status.updateStatus('share thoughts');
  }
  }
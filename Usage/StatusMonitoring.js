import { User } from '../Solution/User.js';
import { InteractionHandler } from '../Solution/InteractionHandler.js';

class PetMonitor {
    static checkStatus(pet) {
        const status = pet.getStatus();
        console.log(`
Status Report for ${pet.name}:
----------------------------
Health: ${status.health}
Happiness: ${status.happiness}
Energy: ${status.energy}
Hunger: ${status.hunger}
        `);
        
        // Alert conditions
        if (status.hunger > 70) console.log('Warning: Pet is very hungry!');
        if (status.energy < 30) console.log('Warning: Pet needs rest!');
        if (status.happiness < 50) console.log('Warning: Pet needs attention!');
    }
}
const user = new User('Sarah');
const pet = user.adoptPet('Cookie', 'Cat');

// Simulate a day of activities
InteractionHandler.play(pet);
PetMonitor.checkStatus(pet);

InteractionHandler.cuddle(pet);
PetMonitor.checkStatus(pet);

InteractionHandler.shareThoughts(pet);
PetMonitor.checkStatus(pet);
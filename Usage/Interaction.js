import { User } from '../Solution/User.js';
import { InteractionHandler } from '../Solution/InteractionHandler.js';

async function simulatePetDay(pet) {
    const activities = ['play', 'feed', 'rest', 'cuddle', 'share thoughts'];
    
    for (const activity of activities) {
        // Simulate time passing between activities
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log(`\nPerforming activity: ${activity}`);
        switch (activity) {
            case 'play':
                InteractionHandler.play(pet);
                break;
            case 'feed':
                InteractionHandler.feed(pet);
                break;
            case 'rest':
                InteractionHandler.rest(pet);
                break;
            case 'cuddle':
                InteractionHandler.cuddle(pet);
                break;
            case 'share thoughts':
                InteractionHandler.shareThoughts(pet);
                break;
        }
        
        console.log(`Status after ${activity}:`, pet.getStatus());
    }
}

const user = new User('Emma');
const pet = user.adoptPet('Whiskers', 'Cat');
simulatePetDay(pet);
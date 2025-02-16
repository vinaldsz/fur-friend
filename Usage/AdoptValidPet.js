import { User } from '../Solution/User.js';
import { PetSpecies } from '../Solution/PetSpecies.js';

try {
    const user = new User('Bob');
    
    // Try to adopt pet with invalid species
    const pet = user.adoptPet('Rex', 'Dragon');
} catch (error) {
    console.error('Failed to adopt pet:', error.message);
}
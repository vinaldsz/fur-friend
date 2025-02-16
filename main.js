import { User } from './Solution/User.js';
import { InteractionHandler } from './Solution/InteractionHandler.js';
import { GameManager } from './Solution/GameManager.js';
import { PetSpecies } from './Solution/PetSpecies.js';
import readline from 'readline';

const gameManager = new GameManager();
const user = new User('Vinal');

// Set up the readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Note: Invalid input needs to be handled in the code

function startGame() {
    if (user.pets.length === 0) {
        // If the user has no pets, prompt them to adopt a new one
        choosePet();
    } else {
        // If the user has pets, show them the options to interact or adopt a new one
        console.log('You already have pets! Here are your options:');
        console.log('1. Adopt a new pet 🐾');
        console.log('2. Interact with an existing pet 🐶');
        
        rl.question('Choose an option (1/2): ', (option) => {
            if (option === '1') {
                choosePet();  // Let the user adopt a new pet
            } else if (option === '2') {
                choosePetToInteract();  // Let the user choose which pet to interact with
            } else {
                console.log('Invalid choice. Please choose 1 or 2.');
                startGame();  // Retry the main menu
            }
        });
    }
}

// Function to choose a pet to adopt
function choosePet() {
    console.log('Choose a pet from the following options:');
    PetSpecies.speciesList.forEach((species, index) => {
        console.log(`${index + 1}. ${species}`);
    });

    rl.question('Enter the number of the pet you want to adopt: ', (answer) => {
        const choice = parseInt(answer);

        if (choice >= 1 && choice <= PetSpecies.speciesList.length) {
            const species = PetSpecies.speciesList[choice - 1];

            rl.question('What would you like to name your pet? ', (petName) => {
                const myPet = user.adoptPet(petName, species);  // Adopt the pet with the chosen name
                gameManager.addUser(user);

                console.log(`🎉 Hooray! You've adopted a furry friend! Meet ${petName}, the adorable ${species}!`);
                console.log(`Your Current Pet status: ${JSON.stringify(myPet.getStatus())}`);
                
                // Start asking the user what action they want to take
                askUserToInteract(myPet);
            });
        } else {
            console.log('Invalid choice, please try again.');
            rl.close();  // Close the interface in case of invalid choice
        }
    });
}

// Function to choose a pet to interact with
function choosePetToInteract() {
    console.log('Here are your adopted pets:');
    user.pets.forEach((pet, index) => {
        console.log(`${index + 1}. ${pet.name} the ${pet.species}`);
    });

    rl.question('Enter the number of the pet you want to interact with: ', (answer) => {
        const choice = parseInt(answer);

        if (choice >= 1 && choice <= user.pets.length) {
            const myPet = user.pets[choice - 1];  // Get the pet the user chose
            askUserToInteract(myPet);  // Start the interaction
        } else {
            console.log('Invalid choice, please try again.');
            choosePetToInteract();  // Retry if input is invalid
        }
    });
}

// Function to ask the user how they want to interact with the pet
function askUserToInteract(myPet) {
    console.log('What would you like to do with your pet?');
    console.log('1. Play 🎾');
    console.log('2. Feed 🍖');
    console.log('3. Rest 😴');
    console.log('4. Cuddle 🤗'); 
    console.log('5. Share Thoughts 🧠');
    
    rl.question('Choose an action (1/2/3): ', (action) => {
        switch (action) {
            case '1':  // Play
                InteractionHandler.play(myPet);
                console.log(`${myPet.name} had a fun playtime! 🐾`);
                console.log(`Your Current Pet status: ${JSON.stringify(myPet.getStatus())}`);
                break;
            case '2':  // Feed
                InteractionHandler.feed(myPet);
                console.log(`${myPet.name} is well-fed now! 🍖`);
                console.log(`Your Current Pet status: ${JSON.stringify(myPet.getStatus())}`);
                break;
            case '3':  // Rest
                InteractionHandler.rest(myPet);
                console.log(`${myPet.name} is resting peacefully! 😴`);
                console.log(`Your Current Pet status: ${JSON.stringify(myPet.getStatus())}`);
                break;
            case '4':  // Cuddle
                InteractionHandler.cuddle(myPet);
                console.log(`${myPet.name} is enjoying a warm cuddle! 🤗`);
                console.log(`Your Current Pet status: ${JSON.stringify(myPet.getStatus())}`);
                break;
            case '5':  // Share Thoughts
                InteractionHandler.shareThoughts(myPet);
                console.log(`${myPet.name} shared some deep thoughts with you! 🧠`);
                console.log(`Your Current Pet status: ${JSON.stringify(myPet.getStatus())}`);
                break;
            default:
                console.log('Invalid choice, please choose 1, 2, or 3.');
                askUserToInteract(myPet);  // Retry interaction if input is invalid
                return;
        }

        // After the interaction, ask the user if they want to do another action
        rl.question('Would you like to interact with your pet again? (yes/no): ', (response) => {
            if (response.toLowerCase() === 'yes') {
                askUserToInteract(myPet);  // Continue the interaction
            } else {
                console.log('Thanks for playing with your pet!');
                console.log(`Your Current Pet status: ${JSON.stringify(myPet.getStatus())}`);
                rl.close();  // End the interaction
            }
        });
    });
}

startGame();  // Start the game when the script is executed
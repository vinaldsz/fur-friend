# ** Fur Friend - Virtual Pet Companion
Submitted by - Vinal Dalcy Dsouza

# Overview

Fur Friend is a virtual pet companion designed to provide users with emotional support and engagement through interactive pet care. Users can adopt, nurture, and interact with their pets while receiving affirmations and companionship.

# Features


Pet Adoption: Choose from different pets (Dog, Cat, Rabbit) with unique traits.
Pet Status Dashboard: Monitor health, hunger, happiness, and energy levels.
Interactive Engagement: Play, feed, cuddle, and care for your pet.
Daily Affirmations: Receive uplifting messages for mental well-being.

# Target Audience

Individuals seeking emotional companionship.
Children learning responsibility through virtual pet care.
People looking for a fun and interactive digital experience.

# How to Run the Project

Clone the repository:
``` git clone https://github.com/your-repo/fur-friend.git```
```cd fur-friend```

Install dependencies:
```npm install```

Start the server:
```npm start```

# Usage

The Usgae folder in the project highlights the usage of the various classes in the Solution folder.

``` node <Filename.js> ``` 
Here replace <Filename.js> with appropriate name 

Example :
``` node AdoptValidPet.js ```

Note that Main.js provides an interactive console for the project.

# OOP Pillars

1. Encapsulation

In Pet class: Encapsulates the species, and status of a pet, managing them through class methods. The status for a pet is updated through Pet using updateStatus().

2. Abstraction

The InteractionHandler class abstracts away the complexity of pet interactions. Users don't need to know how status updates work, they just call methods like play(), feed(), etc.

PetFactory abstracts the pet creation process - users don't need to know the details of how pets are constructed.

3. Inheritance

Cat, Dog, Rabbit all inherit basic pet attributes and methods from Pet class. 

4. Polymorphism

Cat, Dog, Rabbit all have makeSound() method in their classes which is also present in the base class. However these methods are overided in child classes to provide customised noises made by the pet.

# SOLID Principles

1. Single Responsibility

Each class has a single responsibility:

* User: Manages user details and adopted pets.
* PetSpecies: Stores available pet species.
* InteractionHandler: Handles pet interactions.
* GameManager: Manages the game state.

2. Open/Closed Princple:

* InteractionHandler allows new interactions to be added without modifying existing ones.
* PetSpecies.speciesList lets new pets be added without modifying the adoption logic.

3. Liskov Substitution Principle

* Objects of Pet subclasses (like Dog, Cat, Rabbit) can be substituted for Pet objects without affecting the behavior of the system.

4. Interface Seggregation Principle

* Cat, Rabbit, Dog all have different activities that they can do. Say Rabbit wouldn't fetch. The activities specific to Rabbit are only put together in the Rabbit Class, likewise for Dog and Cat ensuring classes don't force unnecessary methods on their clients.

5. Dependency Inversion Principle
* Pet class depends on abstractions (StatusManager) rather than concrete PetStatus

# Design Patterns

1. Singleton Pattern

The GameManager.js is responsible for managing the game instance and its users.

2. Factory Pattern

Pets are created dynamically based on user inputs in PetFactory.js. The pet could belong to any valid species - Dog, Cat, Rabbit.

3. Strategy Pattern

Pet class delegates status management behavior to a separate PetStatus class (the strategy), allowing different ways to handle pet status updates through the updateStatus() method without changing the pet's core behavior - essentially, it separates "what to update" from "how to update it".

# Examples that would break OOP principles

1. Singleton Pattern

Good Example:
The GameManager ensures that only one instance of the game exists, managing users and pets efficiently.

``` export class GameManager {
    static instance;

    constructor() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        this.users = [];
        GameManager.instance = this;
    }

    addUser(user) {
        this.users.push(user);
    }
}

// Usage
const game1 = new GameManager();
const game2 = new GameManager();
console.log(game1 === game2); // true (Same instance)
```

Bad Example: (Breaking Singleton)
Here, multiple instances of GameManager can be created, leading to inconsistent game state.

``` export class GameManager {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }
}

// Usage
const game1 = new GameManager();
const game2 = new GameManager();
console.log(game1 === game2); // false (Different instances)
```

2. Factory Pattern

Good Example:
The PetFactory creates pets dynamically based on the species provided, ensuring flexibility and scalability.

``` import { Dog } from "./Dog.js"; 
import { Cat } from "./Cat.js";
import { Rabbit } from "./Rabbit.js";

export class PetFactory {
    static createPet(name, species) {
        switch (species) {
            case "Dog": return new Dog(name);
            case "Cat": return new Cat(name);
            case "Rabbit": return new Rabbit(name);
            default: throw new Error("Invalid species");
        }
    }
}

// Usage
const myPet = PetFactory.createPet("Buddy", "Dog");
console.log(myPet.makeSound()); ```

Bad Example: (Without Factory)
If each pet were created manually, it would lead to code duplication and make it harder to add new species.

```
import { Dog } from "./Dog.js";
import { Cat } from "./Cat.js";
import { Rabbit } from "./Rabbit.js";

const createPet = (name, species) => {
    if (species === "Dog") {
        return new Dog(name);
    } else if (species === "Cat") {
        return new Cat(name);
    } else if (species === "Rabbit") {
        return new Rabbit(name);
    }
    throw new Error("Invalid species");
};

// Usage
const pet1 = createPet("Buddy", "Dog");
const pet2 = createPet("Whiskers", "Cat"); ```

The issue here is the if-else chain, making it harder to maintain and extend when adding new species.

3. Strategy Pattern

Good Example:
The PetStatus class allows different ways to update the pet’s status, keeping Pet flexible and avoiding hardcoded logic.

```export class PetStatus {
    constructor() {
        this.status = { hunger: 100, happiness: 100 };
    }
    
    updateStatus(activity) {
        if (activity === "feed") this.status.hunger += 10;
        if (activity === "play") this.status.happiness += 10;
    }
    
    getStatus() {
        return this.status;
    }
}```

Bad Example: (Without Strategy Pattern)
Here, Pet directly manages its status, making it harder to change status logic in the future.

``` export class Pet {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.hunger = 100;
        this.happiness = 100;
    }

    updateStatus(activity) {
        if (activity === "feed") this.hunger += 10;
        else if (activity === "play") this.happiness += 10;
        else throw new Error("Unknown activity");
    }
} ```

By tightly coupling the Pet class with status management, any future updates to the status logic would require modifying the Pet class, violating the Open-Closed Principle.



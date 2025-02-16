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

4. Polymorphism


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

4. Interface Seggregation Principle

5. Dependency Inversion Princple

# Design Patterns

1. Singleton Pattern

The GameManager is responsible for managing the game instance and its users.

2. Factory Pattern

Pets are created dynamically based on user inputs in PetFactory.js. The pet could belong to any valid species - Dog, Cat, Rabbit.

3. Command Pattern

InteractionHandler acts like a Command pattern, where each interaction (play, feed, rest) is encapsulated into a method.

# Examples that would break OOP principles



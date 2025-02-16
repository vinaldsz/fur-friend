/**
* Manages the game state and users using the Singleton pattern.
* Ensures only one instance of the game manager exists throughout the application.
*/
export class GameManager {
    /** @type {GameManager} The singleton instance of the GameManager */
    static instance;

    /**
    * Creates a new GameManager instance or returns the existing one.
    * Implements the Singleton pattern to ensure only one GameManager exists.
    * 
    * @returns {GameManager} The singleton GameManager instance
    */ 
    constructor() {
      if (GameManager.instance) {
        return GameManager.instance;
      }
      this.users = [];
      GameManager.instance = this;
    }
    
    /**
    * Adds a new user to the game.
    * 
    * @param {User} user - The user to add to the game
    * @throws {Error} If user is invalid or undefined
    */
    addUser(user) {
      this.users.push(user);
    }
  }
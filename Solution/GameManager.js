export class GameManager {
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
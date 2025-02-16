/**
 * Represents the status and vital statistics of a virtual pet.
 * Manages health, happiness, energy, and hunger levels with various activities.
 */
export class PetStatus {
    /**
     * Creates a new PetStatus instance with default maximum values for health and happiness,
     * full energy, and no hunger.
     */
  constructor() {
      this.health = 100;
      this.happiness = 100;
      this.energy = 100;
      this.hunger = 0;
  }

    /**
     * @returns {Object} The current status of the pet.
     */
    getStatus() {
        return {
          health: this.health,
          happiness: this.happiness,
          energy: this.energy,
          hunger: this.hunger,
        };
      }
  /**
   * Updates the status of the pet based on the activity performed.
   * @param {string} activity - The activity to update the status with.
   */
  updateStatus(activity) {
      switch (activity) {
          case 'play':
              this.happiness = Math.min(100, this.happiness + 10); // Increase happiness, not above 100
              this.energy = Math.max(0, this.energy - 5); // Decrease energy, not below 0
              this.hunger = Math.min(100, this.hunger + 10);
              break;
          case 'feed':
              this.hunger = Math.max(0, this.hunger - 10); // Decrease hunger, not below 0
              this.energy = Math.min(100, this.energy + 5); // Increase energy, not above 100
              break;
          case 'rest':
              this.energy = Math.min(100, this.energy + 10); // Increase energy, not above 100
              this.hunger = Math.min(100, this.hunger + 5);
              break;
          case 'cuddle':
              this.happiness = Math.min(100, this.happiness + 15); // Cuddles boost happiness
              this.energy = Math.max(0, this.energy - 5); // Decrease energy with cuddles
              break;
          case 'share thoughts':
              this.happiness = Math.min(100, this.happiness + 5); // Sharing thoughts increases happiness slightly
              this.energy = Math.max(0, this.energy - 3); // Slight energy decrease
              break;
      }
  }
}

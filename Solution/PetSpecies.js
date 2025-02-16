export class PetSpecies {
    /**
     * List of valid pet species.
     */
    static speciesList = ['Dog', 'Cat', 'Rabbit'];

    /**
     * Checks if a species is valid.
     * @param {*} species 
     * @returns 
     */
    static isValidSpecies(species) {
        return PetSpecies.speciesList.includes(species);
    }
    /**
     * Adds a species to the list of valid species.
     * @param {*} species 
     */
    static addSpecies(species) {
        if (!PetSpecies.speciesList.includes(species)) {
            PetSpecies.speciesList.push(species);
        }
    }
}
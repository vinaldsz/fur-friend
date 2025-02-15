export class PetSpecies {
    static speciesList = ['Dog', 'Cat', 'Rabbit'];

    static isValidSpecies(species) {
        return PetSpecies.speciesList.includes(species);
    }

    static addSpecies(species) {
        if (!PetSpecies.speciesList.includes(species)) {
            PetSpecies.speciesList.push(species);
        }
    }
}
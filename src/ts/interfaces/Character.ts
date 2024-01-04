export interface Character {
    id: string;
    name: string;
    player: string;
    class: string;
    relevance: string;
    race: string;
    hero: string;
    picture: string;
}


//Character array
export const getCharacters = async() => {
    const response = await fetch("./src/JSONs/Characters.json");
    if(response){
         //crear el array de personajes.
        const data : Character[]= await response.json();
        return data;
    }
};
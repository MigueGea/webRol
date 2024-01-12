import { Character } from "./Character";

export interface CharacterFilter {
    classes: string[];
    relevance: string[];
}

export const filterCharacters =(characters: Character[], characterFilter: CharacterFilter) =>{
    return characters.filter(character =>
      (characterFilter.classes.length === 0 || characterFilter.classes.some(filterValue => character.class.includes(filterValue))) &&
        (characterFilter.relevance.length === 0 || characterFilter.relevance.some(filterValue => character.relevance.includes(filterValue)))
    );
};
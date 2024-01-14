import { Character } from "./Character";

export interface CharacterFilter {
    classes: string[];
    relevance: string[];
    name: string;
}

export const filterCharacters =(characters: Character[], characterFilter: CharacterFilter) =>{

    return characters.filter(character =>
      (characterFilter.classes.length === 0 || characterFilter.classes.some(filterValue => character.class.includes(filterValue))) &&
        (characterFilter.relevance.length === 0 || characterFilter.relevance.some(filterValue => character.relevance.includes(filterValue))) &&
        (characterFilter.name.length === 0 || characterFilter.name.split(' ').some(filterValue => character.name.toLowerCase().includes(filterValue.toLowerCase())))
    );
};
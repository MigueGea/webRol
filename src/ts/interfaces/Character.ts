import characters from '../../JSONs/Characters.json';
import iconCleric from '../../assets/icons/classes/cleric.png';
import iconDruid from '../../assets/icons/classes/druid.png';
import iconPalad from '../../assets/icons/classes/paladin.png';
import iconRogue from '../../assets/icons/classes/rogue.png';
import iconWarrior from '../../assets/icons/classes/warrior.png';
import iconWizard from '../../assets/icons/classes/wizard.png';
import iconBard from '../../assets/icons/classes/bard.png';


export interface Character {
    id: string;
    name: string;
    player: string;
    class: string;
    relevance: string;
    race: string;
    picture: string;
}


//Character array
export const getCharacters = async() => {
        const data : Character[]= characters;
        return data;
};


export const getCharacterClass = (characterClass: string)=>{

    switch (characterClass) {
        case 'rogue':
            return iconRogue;
        case 'palad':
            return iconPalad;
        case 'warrior':
            return iconWarrior;
        case 'druid':
            return iconDruid;
        case 'wizard':
            return iconWizard;
        case 'cleric':
            return iconCleric;
        case 'bard':
        return iconBard;
        default:
            return "" ;
    }
}
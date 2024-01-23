import { Chapter } from './Chapter';
import dragonsOfStormwreckIsle from '../../JSONs/adventures/dragonsOfStormwreckIsle.json';
import curseOfStrahd from '../../JSONs/adventures/curseOfStrahd.json';
import allAdventures from '../../JSONs/adventures/allAdventures.json';
export interface Adventure {
    id:string;
    name: string;
    picture: string;
    path: string;
    summary: string;
    chapters: Chapter[];
}

//adventures array
export const getAllAdventures = async() =>{
    const data: Adventure[]= allAdventures;
    return data;
}

//get the json by adventure name
export const getAdventureFetch = async(adventureName:string) => {

    switch (adventureName) {
        case "dragonsOfStormwreckIsle":
            return await getAdventureDragonsOfStormWreckIsle();
        default:
            return await getAdventureDragonsOfStormWreckIsle();
    }
}

//get the dragons of storm isle adventure
export const getAdventureDragonsOfStormWreckIsle = async() => {
    const data: Adventure = dragonsOfStormwreckIsle;
    return data;
};

//get the strahd adventure
export const getAdventureStrahd = async() => {
    const data: Adventure = curseOfStrahd;
    return data;
};

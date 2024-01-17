import adventures from '../../JSONs/Adventures.json';
export interface Adventure {
    id: string;
    name: string;
    picture: string;
    path: string;
    summary: string;
}

//Character array
export const getAdventures = async() => {
    const data : Adventure[]= adventures;
    return data;
};
import React, { ReactNode, useEffect, useState } from 'react';
import { getCharacters,Character } from '../ts/interfaces/Character';

export const CharacterList = () =>{
   
    //this function execute the first time this component is loaded.
    //It will get the character list
    let [characters, setCharacters] = useState<Character[]>([]);
    useEffect(()=>{
        const fechCharacterList = async () =>{
            const characterListFecth: Character[] | undefined = await getCharacters();
            characterListFecth == undefined ? setCharacters([]): setCharacters(characterListFecth);
            //creating a list of divs containing all the characters obtained on the fech.

        }
        fechCharacterList();
        
        
        
    },[]);
return (
   
    <div>LISTA:  {characters.map((characterEach, index) => (
        <div key={index}>
            <p>Name: {characterEach.name}</p>
            <p>Class: {characterEach.class}</p>
        </div>
      ))}
      </div>
    
)

};
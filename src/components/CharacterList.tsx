import  {  useEffect, useState } from 'react';
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
   //Div containing the character list
    <div className='flex flex-wrap gap-10 justify-center select-none xl:mx-10 my-2'>
        {characters.map((characterEach, index) => (
            <a >
                <div className='rounded-sm rounded-tr-3xl bg-slate-600/25 shadow-2xl ring-white backdrop-blur-sm transition duration-300 hover:ring-2 hover:scale-105'>
                    <div className="relative w-40 h-[240px]" key={index}>
                  
                        <img className="" src={`${characterEach.picture}`}/>
                        <div>
                             <img className="w-9 absolute right-1 top-1" src={`src/assets/icons/classes/${characterEach.class}.png`}></img>
                        </div>
                        <div className='flex flex-col flex-grow items-center'>
                            <p className=''>{characterEach.name}</p>
                            <p>{characterEach.relevance}</p>
                        </div>
                        
                    
                    </div>
                </div>
            </a>
        ))}
    </div>
    
)

};
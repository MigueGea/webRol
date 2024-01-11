import { FC, useEffect, useState } from 'react';
import { getCharacters,Character, getCharacterClass } from '../ts/interfaces/Character';
import { CharacterFilter, filterCharacters } from '../ts/interfaces/CharacterFilter';


export const CharacterList:FC<{filterOptions: CharacterFilter}> = ({filterOptions}) =>{
    //This will contain all the characters. We will work with this array to sort the list.
    let [allCharacters, setAllCharacters] = useState<Character[]>([]);
    //this function execute the first time this component is loaded.
    //It will get the character list
    let [characters, setCharacters] = useState<Character[]>([]);
    useEffect(()=>{
        const fechCharacterList = async () =>{
        const characterListFecth: Character[] | undefined = await getCharacters();
        characterListFecth == undefined ? setCharacters([]): setCharacters(characterListFecth);
        characterListFecth == undefined ? setAllCharacters([]): setAllCharacters(characterListFecth);
       
        //creating a list of divs containing all the characters obtained on the fech.

        }
        fechCharacterList();
        
        
        
    },[]);

    useEffect(()=>{
        setCharacters(filterCharacters(allCharacters, filterOptions));
    },[filterOptions]);
return (
   //Div containing the character list
    <div className='flex flex-wrap gap-10 justify-center select-none xl:mx-10 my-2'>
        {characters.map((characterEach) =>  {
            let chClass :string= "";
                chClass =  getCharacterClass(characterEach.class);
            return(
            
            <a key={characterEach.id}>
             
                <div className='rounded-sm rounded-tr-3xl bg-slate-600/25 shadow-2xl ring-white backdrop-blur-sm transition duration-300 hover:ring-2 hover:scale-105'>
                    <div className={`relative w-40 h-[220px] bg-gradient-to-t ${characterEach.relevance == 'Hero' ? ' from-amber-200/25 via-amber-300/25 to-transparent' : ' from-violet-400/25 via-violet-500/25 to-transparent'} `} >
                  
                        <img className="" src={`${characterEach.picture}`}/>
                        <div>
                             <img className="w-9 absolute right-1 top-1" src={chClass}></img>
                        </div>
                        <div className={`flex pb-7 `}>
                            <div className='flex flex-col flex-grow items-center'>
                                <p className='text-white'>{characterEach.name}</p>
                                <svg className={`w-5 ${characterEach.relevance == 'Hero' ? ' fill-amber-300' : ' fill-purple-400'}`} viewBox="0 0 547.37 547.36"> <title>NPC</title><path d="m273.71,547.31c-2.77-25.06-15.54-112.71-90.18-186.37C110.7,289.06,25.53,276.47.05,273.66c18.37.07,114.55-1.43,192.69-78.63C272.4,116.33,273.77,17.8,273.71,0c-.17,17.34.49,116.73,80.64,195.74,78.38,77.27,174.99,78.09,193.01,77.91-20.28.43-113.11,4.6-189.77,79.62-79.4,77.71-83.47,174.7-83.88,194.03Z"></path></svg>
                            </div>
                        </div> 
                        <div className={`absolute inset-x-0 bottom-0 h-1.5  ${characterEach.relevance == 'Hero' ? ' bg-amber-300' : ' bg-purple-400'}`}></div>
                    
                    </div>
                </div>
            </a>
        );})}
    </div>
    
)

};


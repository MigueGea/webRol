import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { getCharacterClass } from "../ts/interfaces/Character";
import { CharacterFilter } from "../ts/interfaces/CharacterFilter";

interface ClassCheckboxFilterProps {
    characterClass: string;
    filterOptions: CharacterFilter;
    onFilterChange: Dispatch<SetStateAction<CharacterFilter>>;
  }

export const ClassCheckboxFilter:FC<ClassCheckboxFilterProps> = ({filterOptions, onFilterChange, characterClass}) => {
    const [iconClass, setIcon] = useState("");
    const [filterActive, setFilter] = useState(false);
    let characterFilter:CharacterFilter = {classes:[],relevance:[]};

    useEffect(()=> {
        setIcon(getCharacterClass(characterClass));
    },[]);

    const handleClassFilter = (event:ChangeEvent<HTMLInputElement>) =>{
        setFilter(!filterActive);
        characterFilter = { classes: [...filterOptions.classes], relevance: [...filterOptions.relevance] };
      
        if(event.target.checked){
            characterFilter.classes.push(characterClass);
            onFilterChange(characterFilter);
        }else{
            characterFilter.classes = characterFilter.classes.filter(valor => valor !== characterClass);
            onFilterChange(characterFilter);
        }
    }

    return(
        <div className="flex justify-center">
                <input type="checkbox" onChange={handleClassFilter} id={`${characterClass}Filter`} className="hidden" />
                    <label htmlFor={`${characterClass}Filter`} className={`checkbox ${filterActive? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title={`${characterClass}`} className="w-9" src={iconClass}/>
                    </label>
        </div>
        )

}; 
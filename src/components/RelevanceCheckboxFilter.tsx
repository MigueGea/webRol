import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { getRelevanceSVG } from "../ts/layout/layoutFuncions";
import { CharacterFilter } from "../ts/interfaces/CharacterFilter";

interface RelevanceCheckboxFilterProps {
    characterRelevance: string;
    filterOptions: CharacterFilter;
    onFilterChange: Dispatch<SetStateAction<CharacterFilter>>;
      }

export const RelevanceCheckboxFilter:FC<RelevanceCheckboxFilterProps> = ({filterOptions, onFilterChange, characterRelevance}) => {
    const [relevanceColor, setIcon] = useState("");
    const [filterActive, setFilterBoolean] = useState(false);
    let characterFilter:CharacterFilter = {classes:[],relevance:[]};

    useEffect(()=> {
        setIcon(getRelevanceSVG(characterRelevance));
    },[]);

    const handleRelevanceFilter = (event:ChangeEvent<HTMLInputElement>) =>{
        setFilterBoolean(!filterActive);
        //init the aux filter
        characterFilter = { classes: [...filterOptions.classes], relevance: [...filterOptions.relevance] };
       
        if(event.target.checked){
            characterFilter.relevance.push(characterRelevance);
            onFilterChange(characterFilter);
        }else{
            characterFilter.relevance = characterFilter.relevance.filter(valor => valor !== characterRelevance);
            onFilterChange(characterFilter);
        }
    }

    return(
        <div className="flex justify-center">
                <input type="checkbox" onChange={handleRelevanceFilter} id={`${characterRelevance}Filter`} className="hidden" />
                <label htmlFor={`${characterRelevance}Filter`} className={`checkbox ${filterActive? "checkbox-selected" : "checkbox-not-selected"}`}>
                    <svg className={`w-10 ${relevanceColor}`} viewBox="0 0 547.37 547.36"> <title>{characterRelevance}</title><path d="m273.71,547.31c-2.77-25.06-15.54-112.71-90.18-186.37C110.7,289.06,25.53,276.47.05,273.66c18.37.07,114.55-1.43,192.69-78.63C272.4,116.33,273.77,17.8,273.71,0c-.17,17.34.49,116.73,80.64,195.74,78.38,77.27,174.99,78.09,193.01,77.91-20.28.43-113.11,4.6-189.77,79.62-79.4,77.71-83.47,174.7-83.88,194.03Z"></path></svg>
                </label>

        </div>
        )

}; 
import { ChangeEvent, useState } from "react";
import { CharacterList } from "./CharacterList";
import { ClassCheckboxFilter } from "./ClassCheckboxFilter";
import { RelevanceCheckboxFilter } from "./RelevanceCheckboxFilter";
import { CharacterFilter } from "../ts/interfaces/CharacterFilter";

 
export const CharacterLayout =() =>{

    const [filterOptions,setFilter] = useState<CharacterFilter>({classes: [],relevance: [], name:""});
    let characterFilterAux:CharacterFilter = {classes:[],relevance:[], name:""};

    const onNameFilterChange = (event:ChangeEvent<HTMLInputElement>) =>{
        characterFilterAux = { classes: [...filterOptions.classes], relevance: [...filterOptions.relevance], name: filterOptions.name};
        characterFilterAux.name = event.target.value;
        setFilter(characterFilterAux);

    }
        
    return (
        <div className="flex flex-col p-10  text-xl font-semibold text-neutral-300 ">
            {/* Div for complete filter */}
            <div className="flex flex-wrap justify-around border border-teal-800 bg-neutral-900/90 rounded-md p-5">
                {/* Div for filter with options */}
                <div>
                    <button className="border-neutral-600 border rounded-md p-1">
                        <svg className="w-10 fill-white" viewBox="0 0 24 24">
                            <title>filter</title>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 3a1 1 0 0 1 .993 .883l.007 .117v3.171a3.001 3.001 0 0 1 0 5.658v7.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-7.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-3.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path><path d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9.171a3.001 3.001 0 0 1 0 5.658v1.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-9.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path><path d="M18 3a1 1 0 0 1 .993 .883l.007 .117v.171a3.001 3.001 0 0 1 0 5.658v10.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-10.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path>
                        </svg>
                    </button>
                </div>
                    
                {/* Div for input*/}
                <div className="my-auto">          
                    <input placeholder="Character name" onChange={onNameFilterChange} className="rounded-md  p-2 placeholder-neutral-600 text-black"></input>
                </div>
                {/* Div for hero or npc filter*/}
                <div className="flex justify-center">
                    <RelevanceCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterRelevance="NPC" />
                     <RelevanceCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterRelevance="Hero" />
                    
                </div>

                {/* Div for classes filter*/}
                <div className="flex justify-center">
                    <ClassCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterClass="rogue" />
                    <ClassCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterClass="druid" />
                    <ClassCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterClass="palad" />
                    <ClassCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterClass="wizard" />
                    <ClassCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterClass="warrior" />
                    <ClassCheckboxFilter filterOptions={filterOptions} onFilterChange={setFilter} characterClass="bard" />
                </div>
            </div>
            <CharacterList filterOptions={filterOptions}/>
        </div>
    );
}
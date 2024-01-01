import { useState } from "react";
import { CharacterList } from "./CharacterList";
 
interface CharacterFilter {
    heroFilter:boolean,
    npcFilter:boolean
}
export const CharacterLayout =() =>{
    const [heroFilter, setHeroFilter] = useState(false);
    const [npcFilter, setNpcFilter] = useState(false);
    const [rogueFilter, setRogueFilter] = useState(false);
    const [paladinFilter, setPaladinFilter] = useState(false);
    const [wizardFilter, setWizardFilter] = useState(false);
    const [druidFilter, setDruidFilter] = useState(false);
    const [warriorFilter, setWarriorFilter] = useState(false);
    const [clericFilter, setClericFilter] = useState(false);

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
                    <input placeholder="Character name" className="rounded-md  p-2 placeholder-neutral-600 text-black"></input>
                </div>
                {/* Div for hero or npc filter*/}
                <div className="flex justify-center">
                    <input type="checkbox" onClick={()=>{setNpcFilter(!npcFilter)}} id="npcFilter" className="hidden" />
                    <label htmlFor="npcFilter" className={`checkbox ${npcFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <svg className="w-10 fill-purple-400" viewBox="0 0 547.37 547.36"> <title>NPC</title><path d="m273.71,547.31c-2.77-25.06-15.54-112.71-90.18-186.37C110.7,289.06,25.53,276.47.05,273.66c18.37.07,114.55-1.43,192.69-78.63C272.4,116.33,273.77,17.8,273.71,0c-.17,17.34.49,116.73,80.64,195.74,78.38,77.27,174.99,78.09,193.01,77.91-20.28.43-113.11,4.6-189.77,79.62-79.4,77.71-83.47,174.7-83.88,194.03Z"></path></svg>
                    </label>
                    
                    <input type="checkbox" onClick={()=>{setHeroFilter(!heroFilter)}} id="heroFilter" className="hidden" />
                    <label htmlFor="heroFilter" className={`checkbox ${heroFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <svg className="w-10 fill-yellow-600" viewBox="0 0 547.37 547.36"> <title>Hero</title><path d="m273.71,547.31c-2.77-25.06-15.54-112.71-90.18-186.37C110.7,289.06,25.53,276.47.05,273.66c18.37.07,114.55-1.43,192.69-78.63C272.4,116.33,273.77,17.8,273.71,0c-.17,17.34.49,116.73,80.64,195.74,78.38,77.27,174.99,78.09,193.01,77.91-20.28.43-113.11,4.6-189.77,79.62-79.4,77.71-83.47,174.7-83.88,194.03Z"></path></svg>
                    </label>
                    
                </div>

                {/* Div for classes filter*/}
                <div className="flex justify-center">
                    <input type="checkbox" onClick={()=>{setRogueFilter(!rogueFilter)}} id="rogueFilter" className="hidden" />
                    <label  htmlFor="rogueFilter" className={`checkbox ${rogueFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title="Rogue" className="w-9" src="/src/assets/icons/classes/rogue.png"/>
                        
                    </label>

                    <input type="checkbox" onClick={()=>{setDruidFilter(!druidFilter)}} id="druidFilter" className="hidden" />
                    <label htmlFor="druidFilter" className={`checkbox ${druidFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title="Druid" className="w-9" src="/src/assets/icons/classes/druid.png"/>
                    </label>

                    <input type="checkbox" onClick={()=>{setPaladinFilter(!paladinFilter)}} id="paladinFilter" className="hidden" />
                    <label htmlFor="paladinFilter" className={`checkbox ${paladinFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title="Paladin" className="w-9" src="/src/assets/icons/classes/paladin.png"/>
                    </label>

                    <input type="checkbox" onClick={()=>{setWizardFilter(!wizardFilter)}} id="wizardFilter" className="hidden" />
                    <label htmlFor="wizardFilter" className={`checkbox ${wizardFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title="Wizard" className="w-9" src="/src/assets/icons/classes/wizard.png"/>
                    </label>

                    <input type="checkbox" onClick={()=>{setWarriorFilter(!warriorFilter)}} id="warriorFilter" className="hidden" />
                    <label htmlFor="warriorFilter" className={`checkbox ${warriorFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title="Warrior" className="w-9" src="/src/assets/icons/classes/warrior.png"/>
                    </label>

                    <input type="checkbox" onClick={()=>{setClericFilter(!clericFilter)}} id="clericFilter" className="hidden" />
                    <label htmlFor="clericFilter" className={`checkbox ${clericFilter? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title="Cleric" className="w-9" src="/src/assets/icons/classes/cleric.png"/>
                    </label>
                                    
                </div>
            </div>

            <div className="flex flex-wrap justify-around border border-teal-800 bg-neutral-900/90 rounded-md p-5 mt-10">
                <CharacterList/>
            </div>
           
           
        </div>
    );
}
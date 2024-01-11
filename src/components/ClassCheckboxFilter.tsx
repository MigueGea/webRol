import { FC, useEffect, useState } from "react";
import { getCharacterClass } from "../ts/interfaces/Character";

interface ClassCheckboxFilterProps {
    characterClass: string;
  }

export const ClassCheckboxFilter:FC<ClassCheckboxFilterProps> = (props) => {
    const [iconClass, setIcon] = useState("");
    const [filterActive, setFilter] = useState(false);

    useEffect(()=> {
        setIcon(getCharacterClass(props.characterClass));
    },[]);

    return(
        <div className="flex justify-center">
                <input type="checkbox" onClick={()=>{setFilter(!filterActive)}} id={`${props.characterClass}Filter`} className="hidden" />
                    <label htmlFor={`${props.characterClass}Filter`} className={`checkbox ${filterActive? "checkbox-selected" : "checkbox-not-selected"}`}>
                        <img title={`${props.characterClass}`} className="w-9" src={iconClass}/>
                    </label>
        </div>
        )

}; 
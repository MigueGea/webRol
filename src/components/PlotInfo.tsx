import { FC, useEffect, useState } from "react";
import { Chapter } from "../ts/interfaces/Chapter";
import partyToken from '../assets/img/characters/partyToken-WOB.png';

interface CurrentChapter{
    currentChapter:Chapter | undefined;
}


export const PlotInfo:FC<CurrentChapter> = ({currentChapter}) =>{
    const [rangeValue, setRangeValue] = useState(0);
    const [rangeSize, setRangeSize] = useState(0);
    // Change the map and the summary
    useEffect( () =>{
        //init the range component
        var rangeInputElement = document.getElementById("plotRange");
        if (rangeInputElement && rangeInputElement instanceof HTMLInputElement) {
            rangeInputElement.value = "0";
        }
        if(currentChapter != undefined){
            setRangeSize(currentChapter?.maps.length-1);
        }
        setRangeValue(0);
       
    }, [currentChapter] );
    
    const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(e.target.value));
    };

    return (
        <div className='flex flex-col gap-4 justify-center select-none xl:mx-10  items-center justify-center '>
            <div className="flex flex-row" >
            <label htmlFor="chapterRangeInput">Chronology:</label>
            <input className="ml-3" type="range" id="plotRange" onChange={onRangeChange} defaultValue="0" name="chapterRangeInput" min="0" max={rangeSize}/>
           </div>
           <div className="flex flex-row" >
                <div className="flex relative w-1/2" >
                    <img className={`max-w-[38rem] max-h-[26rem] mx-4`} src={`${currentChapter?.maps[rangeValue]}`}/>
                    <div>
                        <img className="w-9 absolute right-[27rem] top-[16rem]" src={partyToken}></img>
                    </div>
                </div>
                <div className="flex w-1/2 mx-8" >
                <p className="">{`${currentChapter?.chapterSummary[rangeValue]}`}</p>
                </div>
            </div>
        
       
        
      </div>    
    )
}
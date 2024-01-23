import { FC, useEffect, useState} from "react"
import { useLocation } from "react-router-dom";
import { Adventure, getAdventureFetch } from "../ts/interfaces/Adventures";
import { Chapter } from "../ts/interfaces/Chapter";
import { PlotInfo } from "./PlotInfo";
export const AdventureHistory: FC = () =>{

    const {state}  = useLocation();
    const adventure = state.adventure;
    const [showChapter, setShowChapter] = useState(false);
    const [chapterList, setChapterList] = useState<Chapter[]>([]);
    const [currentChapter,setCurrentChapter] = useState<Chapter>();
   

    useEffect( () =>{
        const fechAdventure = async () =>{
            const adventureFecth: Adventure | undefined = await getAdventureFetch(adventure.name);
            if(adventureFecth != undefined && adventureFecth.chapters != undefined){
              setChapterList(adventureFecth.chapters);
            }
        }
        fechAdventure();
    }, []);

    // Change the chapter
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      
      if(e.target.value != "-1"){
        const selectedValue = e.target.value;
        const parsedChapter = JSON.parse(selectedValue) as Chapter; // Convertir el valor de cadena JSON de nuevo a un objeto Chapter
        setCurrentChapter(parsedChapter);
        setShowChapter(true);
      }else{
        setShowChapter(false);
      }
    };

    return (<div className="flex flex-col p-10 border border-teal-800 bg-neutral-900/90 text-xl font-semibold text-neutral-300">
      <h1 className="mx-auto mb-4 font-bold">{adventure.name}</h1>
      <p>{adventure.summary}</p>
      <label>
        Pick a chapter:
        <select onChange={handleSelectChange}>
          <option value="-1">Select...</option>
          {chapterList.map((chapter, index) =>(
            <option key={index} value={JSON.stringify(chapter)}>
                {chapter.title}
            </option>
          ) )}
        </select>
      </label>

      {showChapter && (

       <PlotInfo currentChapter={currentChapter}/>
      ) }



 </div>);
}
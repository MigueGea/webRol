import { FC} from "react"
import { useLocation } from "react-router-dom";
export const AdventureHistory: FC = () =>{

    const {state}  = useLocation();
    const adventure = state.adventure;


    return (<div className="flex flex-col p-10 border border-teal-800 bg-neutral-900/90 text-xl font-semibold text-neutral-300">
    <h1 className="mx-auto mb-4 font-bold">{adventure.name}</h1>
    <p>{adventure.summary}</p>
 </div>);
}
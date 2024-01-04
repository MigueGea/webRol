import { FC} from 'react';
import { WelcomePage } from './WelcomePage';
import { NavigationBar } from './NavigationBar';
import { CharacterLayout } from './CharacterLayout.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
export const Layout: FC = () =>{
    
    return (
        //Main div
        <Router>
        <div  className="flex h-screen">
             {/* Left column */}
                <NavigationBar/>
            
             {/* Rigth column */}   
            <div id="layoutRigthSide" className="container px-20 py-10">
           <Routes> 
                <Route path="/webRol/" element={<WelcomePage />} />
                <Route path="/webRol/characters" element={<CharacterLayout />} />
           </Routes>        
             </div>
        </div>
        </Router>
       

    )

}

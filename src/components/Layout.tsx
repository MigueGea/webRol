import { FC} from 'react';
import { WelcomePage } from './WelcomePage';
import { NavigationBar } from './NavigationBar';
import { CharacterLayout } from './CharacterLayout.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdventuresLayout } from './AdventuresLayout.tsx';
import { AdventureHistory } from './AdventureHistory.tsx';
import { NavigationBarMobile } from './NavigationBarMobile.tsx';

 
export const Layout: FC = () =>{
    
    return (
        //Main div
        <Router>
        <div className="flex h-screen">
             {/* Left column */}            
                <NavigationBarMobile/>                 
                <NavigationBar/>
             {/* Rigth column */}   
            <div id="layoutRigthSide" className="container px-20 py-2">
                <Routes> 
                        <Route path="/webRol/" element={<WelcomePage />} />
                        <Route path="/webRol/characters/" element={<CharacterLayout />} />
                        <Route path="/webRol/adventures/" element={<AdventuresLayout />} />
                        <Route path="/webRol/adventures/:adventure" element={<AdventureHistory/>} />
                </Routes>        
             </div>
        </div>
        </Router>
       

    )

}

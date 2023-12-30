import { FC, useState,ReactNode } from 'react';
import { WelcomePage } from './WelcomePage';
import { NavigationBar } from './NavigationBar';
import { handlePageChange } from '../ts/layout/layoutFuncions.ts';
import { CharacterLayout } from './CharacterLayout.tsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export const Layout: FC = () =>{
    
    const [currentPage, setCurrentPage] = useState<string>("home");

   
    return (
        //Main div
        <Router>
        <div  className="flex h-screen">
             {/* Left column */}
                <NavigationBar/>
            
             {/* Rigth column */}   
            <div id="layoutRigthSide" className="container px-20 py-10">
           <Routes> 
                <Route path="/" element={<WelcomePage />} />
                <Route path="/characters" element={<CharacterLayout />} />
           </Routes>        
             </div>
        </div>
        </Router>
       

    )

}

import { FC, useState,ReactNode } from 'react';
import { WelcomePage } from './WelcomePage';
import { NavigationBar } from './NavigationBar';
import { handlePageChange } from '../ts/layout/layoutFuncions.ts';
import { CharacterLayout } from './CharacterLayout.tsx';


export const Layout: FC = () =>{
    
    const [currentPage, setCurrentPage] = useState<ReactNode>(<CharacterLayout/>);

    const onPageChange = (option: string) =>{
        handlePageChange(option, setCurrentPage);
    }
    return (
        //Main div
        <div  className="flex h-screen">
             {/* Left column */}
                <NavigationBar onPageChange={onPageChange}/>
            
             {/* Rigth column */}   
            <div id="layoutRigthSide" className="container px-20 py-10">
              {currentPage}
             </div>
        </div>
       

    )

}

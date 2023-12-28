import { FC, useState } from 'react';
import { WelcomePage } from './WelcomePage';
import { NavigationBar } from './NavigationBar';
import { CharacterLayout } from './CharacterLayout';


export const Layout: FC = () =>{
    
    const [currentPage, setCurrentPage] = useState(<WelcomePage/>)

    const handlePageChange = (option: string) =>{
        if(option == 'home'){
            setCurrentPage(<WelcomePage/>);
        }else if(option == 'characters'){
            setCurrentPage(<CharacterLayout/>);
        }
    }
    return (
        //Main div
        <div  className="flex h-screen">
             {/* Left column */}
                <NavigationBar onPageChange={handlePageChange}/>
            
             {/* Rigth column */}   
            <div id="layoutRigthSide" className="container px-20 py-10">
              {currentPage}
             </div>
        </div>
       

    )

}

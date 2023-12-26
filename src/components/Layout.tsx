import React from "react";

export const Layout: React.FC<Props> = ({children}) =>{

    return (
        //Main div
        <div  className="flex h-screen">
             {/* Left column */}
            <div id="layoutLeftSide" className="flex-shrink-0 w-1/4 bg-gray-200 p-4">
                <h2 className="text-xl font-semibold mb-4">D&D Opciones</h2>
            </div>
             {/* Rigth column */}   
            <div id="layoutRigthSide" className="flex-grow p-4">
              {children}
             </div>
        </div>
       

    )

}

interface Props {
    children: React.ReactNode;
  }
  
import React from "react";

export const Layout: React.FC<Props> = ({children}) =>{

    return (
        //Main div
        <div  className="flex h-screen">
             {/* Left column */}
            <div id="layoutLeftSide" className="flex-shrink-0 w-1/6 bg-neutral-900 border-r border-r-teal-800 xl:flex flex-col">

                
                  {/* main image container: */}
                <div className="flex justify-center">
                     <a href="/home" className="w-[70%] pt-4">                 
                        <img src="/src/assets/img/mainWebIcon.png" alt="Welcome"/>
                    </a> 
                </div>
                {/* Option list */}
                <div className="mb-4 mt-5 grow">
                    <ul className="text-xl font-semibold mb-4 text-neutral-300">
                        <li className="mb-2">
                            <a href="/" className="px-4 py-2 hover:bg-black/20 flex gap-3 transition duration-200">
                                <svg className="w-9 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>home</title>
                                    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                                </svg>
                                <div className="my-auto">Home</div></a>
                        </li>
                        <li className="mb-2">
                            <a href="/characters" className="px-4 py-2 hover:bg-black/20 flex gap-3">
                            <img className="w-9" src="/src/assets/img/characters.png"/>
                            <div className="my-auto">Characters</div></a>
                        </li>
                        <li className="mb-2">
                            <a href="/characters" className="px-4 py-2 hover:bg-black/20 flex gap-3">
                                 <img className="w-9" src="/src/assets/img/classes.png"/>
                                <div className="my-auto">Characters</div>
                            </a>
                        </li>
                        <li>
                            <a href="/characters" className="px-4 py-2 hover:bg-black/20 flex gap-3">
                                 <img className="w-9" src="/src/assets/img/adventures.png"/>
                                <div className="my-auto">Adventures</div>
                            </a>
                             
                        </li>
                    </ul>
                </div>
                 {/* settings image container: */}
                 <div className="flex text-xl font-semibold mb-4 text-neutral-300">   
                    <a href="/characters" className="px-4 py-2 hover:bg-black/20 flex gap-3 grow">
                        <img src="/src/assets/img/SettingsIcon.png" alt="Settings" className="w-9" />
                        <div className="my-auto">Options</div>
                    </a>              
                   
                </div>
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
  
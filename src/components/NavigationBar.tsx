import { FC } from "react";

interface NavigationBarProps {
    onPageChange: (option: string) => void;
  }
export const NavigationBar: FC<NavigationBarProps> = ({ onPageChange }) => {


    return ( <div id="layoutLeftSide" className="flex-shrink-0 w-1/6 bg-neutral-900 border-r border-r-teal-800 xl:flex flex-col">

                
    {/* main image container: */}
  <div className="flex justify-center ">
       <a href="/home" className="w-[70%] pt-4">                 
          <img src="/src/assets/img/mainWebIcon.png" alt="Welcome"/>
      </a> 
  </div>
  {/* Option list */}
  <div className="mt-5 grow border-y border-y-teal-800">
      <ul className="text-xl font-semibold mb-4 text-neutral-300">
          <li className="li-navigation-bar">
              <svg className="w-9 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>home</title>
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
              </svg>
              <button onClick={() => onPageChange('home')}>Home</button>
          </li>
          <li className="li-navigation-bar">
              <img className="w-9" src="/src/assets/img/characters.png"/>
              <button onClick={() => onPageChange('characters')}>Characters</button>           
          </li>
          <li className="li-navigation-bar">
              <img className="w-9" src="/src/assets/img/classes.png"/>
              <button>Classes</button>  
          </li>
          <li className="li-navigation-bar" >
             <img className="w-9" src="/src/assets/img/adventures.png"/>
              <button>Adventures</button>  
               
          </li>
      </ul>
  </div>
   {/* settings image container: */}
   <div className="flex text-xl font-semibold text-neutral-300">   
      <a href="/characters" className="px-4 hover:bg-black/20 flex gap-3 grow py-4">
          <img src="/src/assets/img/SettingsIcon.png" alt="Settings" className="w-9" />
          <div className="my-auto">Options</div>
      </a>              
     
  </div>
</div>);
}
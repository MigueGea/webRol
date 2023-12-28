import { FC, useState } from "react";

interface NavigationBarProps {
    onPageChange: (option: string) => void;
  }
export const NavigationBar: FC<NavigationBarProps> = ({ onPageChange }) => {

    const [liSelected, setSelected ] = useState<string>('home'); 

    const handleLiClick = (option:string) =>{
        setSelected(option);
        onPageChange(option);
    }

    return ( <div id="layoutLeftSide" className="flex-shrink-0 w-1/6 bg-neutral-900 border-r border-r-teal-800 xl:flex flex-col">

                
    {/* main image container: */}
  <div className="flex justify-center ">
       <a href="/home" className="w-[70%] pt-4">                 
          <img src="/src/assets/img/mainWebIcon.png" alt="Welcome"/>
      </a> 
  </div>
  {/* Option list */}
  <div className="mt-5 grow border-b border-y-teal-800">
      <ul className="text-xl font-semibold mb-4 text-neutral-300">
          <li onClick={() => handleLiClick('home')} className={`li-navigation-bar ${liSelected == 'home' ? 'li-selected' : ''}`}>
              <svg className="w-9 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>home</title>
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
              </svg>
              <p className="my-auto">Home</p>
          </li>
          <li onClick={() => handleLiClick('characters')} className={`li-navigation-bar ${liSelected == 'characters' ? 'li-selected' : ''}`}>
              <img className="w-9" src="/src/assets/img/characters.png"/>
              <p className="my-auto">Characters</p>           
          </li>
          <li onClick={() => handleLiClick('classes')} className={`li-navigation-bar ${liSelected == 'classes' ? 'li-selected' : ''}`}>
              <img className="w-9" src="/src/assets/img/classes.png"/>
              <p className="my-auto">Classes</p>  
          </li>
          <li onClick={() => handleLiClick('adventures')} className={`li-navigation-bar ${liSelected == 'adventures' ? 'li-selected' : ''}`}>
             <img className="w-9" src="/src/assets/img/adventures.png"/>
            <p className="my-auto">Adventures</p>  
               
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
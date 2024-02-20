import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handlePageChange } from '../ts/layout/layoutFuncions';
import imgCharacters from '../assets/img/characters.png';
import imgAdventures from '../assets/img/adventures.png';
import menuMobile from '../assets/icons/svg/burger-menu-svgrepo-com.svg';

export const NavigationBarMobile = () => {
   //state of the current location
   let {state} = useLocation();
   //when the location changes, this useEffect will execute
   useEffect(()=> {
       //change de css of navigation bar using de location
       handlePageChange(state?.location ?? "");

   }, [state]);
   const [liSelected, setSelected ] = useState<string>('home'); 

   const handleLiClick = (option:string) =>{
       setSelected(option);
   }
    return (
        <div className="block xl:hidden p-3">
            <Menu customBurgerIcon={
                 <img className="custom-width-12" src={menuMobile} alt="Menu" />} >

               <div className="flex justify-center">
               <Link state={{ location: "home" }}  to="/webRol/">
                <li id="liHome" onClick={() => handleLiClick('home')} className={`li-navigation-bar ${liSelected == 'home' ? 'li-selected' : ''}`}>
                    <svg className="w-9 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>home</title>
                        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                    </svg>
                    <p className="my-auto">Home</p>
                    
                </li>
          </Link>
            </div>
            <Link to="/webRol/characters" state={{ location: "characters" }}>
          <li  id="liCharacters" onClick={() => handleLiClick('characters')} className={`li-navigation-bar ${liSelected == 'characters' ? 'li-selected' : ''}`}>
              
              <img className="w-9" src={imgCharacters}/>
              <p className="my-auto">Characters</p>    
          </li>
          </Link> 
          <Link to="/webRol/adventures" state={{ location: "adventures" }}>
          <li id="liAdventures" onClick={() => handleLiClick('adventures')} className={`li-navigation-bar ${liSelected == 'adventures' ? 'li-selected' : ''}`}>
             <img className="w-9" src={imgAdventures}/>
            <p className="my-auto">Adventures</p>  
          </li>
          </Link>
               
            </Menu>
            
        </div>
    )
}

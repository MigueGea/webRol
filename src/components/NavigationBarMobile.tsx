import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handlePageChange } from '../ts/layout/layoutFuncions';
import imgCharacters from '../assets/img/characters.png';
import imgAdventures from '../assets/img/adventures.png';

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
            <Menu customBurgerIcon={<svg className="fill-white" viewBox="0 0 40 40">
                    <title>Menu</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 3a1 1 0 0 1 .993 .883l.007 .117v3.171a3.001 3.001 0 0 1 0 5.658v7.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-7.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-3.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path><path d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9.171a3.001 3.001 0 0 1 0 5.658v1.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-9.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path><path d="M18 3a1 1 0 0 1 .993 .883l.007 .117v.171a3.001 3.001 0 0 1 0 5.658v10.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-10.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="white"></path>
                </svg>}>

               <div className="flex justify-center ">
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

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState} from "react";
import { Adventure, getAllAdventures } from "../ts/interfaces/Adventures";
import { Link } from "react-router-dom";

export const AdventuresLayout = () =>{

    let [allAdventures, setAllAdventures] = useState<Adventure[]>([]);

    useEffect(()=>{
        const fechAdventureList = async () =>{
        const adventureListFecth: Adventure[] | undefined = await getAllAdventures();
        adventureListFecth == undefined ? setAllAdventures([]): setAllAdventures(adventureListFecth);
        adventureListFecth == undefined ? setAllAdventures([]): setAllAdventures(adventureListFecth);
        //creating a list of divs containing all the characters obtained on the fech.
        }
        fechAdventureList();
    },[]);


    return (
        <div className="flex items-center justify-center ">
            <div className="flex text-xl font-semibold text-neutral-300 border-teal-800 bg-neutral-900/90 mt-10 pt-10 px-10 pb-2 border border-teal-800">
                <Carousel showThumbs={false} showArrows={true} >
                    {
                        allAdventures.map((adventureEach) => (
                            <Link key={adventureEach.id} state={{ location: "adventures",adventure: adventureEach }}  to={`/webRol/adventures/${adventureEach.path}`}>
                                <div className="transition duration-300 hover:scale-105 cursor-pointer" >
                                    <div className="slide w-80" >
                                        <img alt="" src={`${adventureEach.picture}`} />
                                    </div>
                                    <p className="legend">{adventureEach.name}</p>
                                </div>
                            </Link>
                    ))}
                </Carousel>
             </div>
       </div>
    )
}

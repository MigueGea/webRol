
export const handlePageChange = (option: string) =>{
    const liHome = document.getElementById("liHome");
    const liCharacters = document.getElementById("liCharacters")
    const liAdventures = document.getElementById("liAdventures")
    switch (option) {
        
        case "home":
            liHome?.classList.add("li-selected");
            liCharacters?.classList.remove("li-selected");
            liAdventures?.classList.remove("li-selected");
            break;
        case "characters":
            liCharacters?.classList.add("li-selected");
            liHome?.classList.remove("li-selected");
            liAdventures?.classList.remove("li-selected");
            break;
        case "adventures":
            liAdventures?.classList.add("li-selected");
            liHome?.classList.remove("li-selected");
            liCharacters?.classList.remove("li-selected");
             break; 
        default:
            liHome?.classList.add("li-selected");
            liCharacters?.classList.remove("li-selected");
            liAdventures?.classList.remove("li-selected");
            break;
    }
}

export const getRelevanceSVG = (option:string) =>{
    switch (option) {
        
        case "Hero":
            return "fill-yellow-600";
        case "NPC":
            return "fill-purple-400"
        default:
            return "";
    }

}
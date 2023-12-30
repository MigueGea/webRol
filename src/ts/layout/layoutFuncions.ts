
export const handlePageChange = (option: string) =>{
    console.log(option);
    const liHome = document.getElementById("liHome");
    const liCharacters = document.getElementById("liCharacters")
    switch (option) {
        
        case "home":
            liHome?.classList.add("li-selected");
            liCharacters?.classList.remove("li-selected");
            break;
        case "characters":
            liCharacters?.classList.add("li-selected");
            liHome?.classList.remove("li-selected");
            break;
        default:
            break;
    }
}
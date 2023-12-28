import { Dispatch, ReactNode, SetStateAction } from "react"
import { WelcomePage } from './../../components/WelcomePage';
import { CharacterLayout } from './../../components/CharacterLayout';

export const handlePageChange = (option: string, setCurrentPage: Dispatch<SetStateAction<ReactNode>>) =>{
    if(option == 'home'){
        setCurrentPage(WelcomePage);
    }else if(option == 'characters'){
        setCurrentPage(CharacterLayout);
    }
}
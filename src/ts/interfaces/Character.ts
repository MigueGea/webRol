interface Character {
    name: string;
    class: string;
    race: string;
    hero: string;
}

//Main Characters
let Mopri : Character = {name:'Mopri', class:'picaro', race:'mediano', hero:'S'};
let Pom : Character =  {name:'Pom', class:'Druida', race:'enano', hero:'S'};

// NPCs
let Mumpo : Character = {name:'Mumpo', class:'Guerrero', race:'dracónido', hero:'N'};

//Character array
let characters : Character[] = [Mopri, Pom, Mumpo];
import { heroes } from "../data/heroes";

 export const heroesFilter  = ( publisher ) =>{

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)){
       throw(`El pusblisher ${ publisher } no existe`) 
    }

    return heroes.filter((heroes) => heroes.publisher === publisher );

}
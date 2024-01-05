import { heroes } from "../data/heroes";

export const getHeroById = (  id  ) =>{

   const hero =  heroes.find((heroe) => heroe.id === id )
   return hero;
}
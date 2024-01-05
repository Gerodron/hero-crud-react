import { memo, useEffect, useState } from "react";
import { CardHero } from "./HeroCard";
import { heroesFilter } from "../helpers";

export const HeroesList = memo(({ publisherName }) => {
  const [herosState, setHeroes] = useState([]);

  const insertHeroes = (heroes) => {
    setHeroes(heroes);
  };

  useEffect(() => {
    const heroes = heroesFilter(publisherName);
    insertHeroes(heroes);
  }, [publisherName]);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {herosState.map((heroe) => (
            <CardHero key={ heroe.id } heroe={ heroe } />
        ))}
      </div>
    </>
  );
});

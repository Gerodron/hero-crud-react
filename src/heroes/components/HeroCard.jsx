import { Link } from "react-router-dom";

const CharactersByHero = ({characters, alter_ego }) =>{
   return (alter_ego === characters ? <></> : <p> { characters } </p>)

}

export const CardHero = ({ heroe }) => {
  const heroImageUrl = `/assets/heroes/${heroe.id}.jpg`;
  const charactersByHero = (<span> {heroe.characters} </span>)

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              {" "}
              {/* Adjusted class for 3-column grid */}
              <img
                src={heroImageUrl}
                className="card-img"
                alt={heroe.superHero}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-8">
              {" "}
              {/* Adjusted class for 9-column grid */}
              <div className="card-body">
                <h5 className="card-title">{heroe.superHero}</h5>
                <p className="card-text">{heroe.alter_ego}</p>
                <p>
                  <CharactersByHero alter_ego = { heroe.alter_ego} characters={ heroe.characters} />
                  <span className="card-text">
                    <small className="text-mute">
                      {" "}
                      {heroe.first_appearance}{" "}
                    </small>
                  </span>
                </p>
                <Link to={`/hero/${heroe.id}`}>Mas..</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const onNavigateBack = () => {
    navigate('/marvel',{
        replace: true
    })
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={`/assets/heroes/${id}.jpg`}
              alt={superhero}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h3 className="text-center">{superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Alter ego:</b> {alter_ego}
              </li>
              <li className="list-group-item">
                <b>Publisher:</b> {publisher}
              </li>
              <li className="list-group-item">
                <b>First appearance:</b> {first_appearance}
              </li>
            </ul>
            <h5 className="text-center mt-3">Characters</h5>
            <ul className="list-group list-group-flush">
              <p className="list-group-item">{characters}</p>
            </ul>
            <button
              onClick={onNavigateBack}
              className="btn btn-outline-primary"
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

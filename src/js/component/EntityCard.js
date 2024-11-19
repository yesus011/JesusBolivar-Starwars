import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const EntityCard = ({ entity, type }) => {
    const { actions } = useContext(Context);

    return (
        <div className="col-4">
            <div className="card mb-3">
                <img src={`https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${entity.uid}.jpg`} className="card-img-top" alt={entity.name} />
                <div className="card-body">
                    <h5 className="card-title">{entity.name}</h5>
                    <p className="card-text mb-0">Eye color: {entity.eye_color}</p>
                    <p className="card-text mb-0">Hair color: {entity.hair_color}</p>
                    <p className="card-text mb-3">Gender: {entity.gender}</p>
                    <Link to={`/details/${type}/${entity.uid}`} className="btn btn-primary me-1">Details</Link>
                    <button onClick={() => actions.addFavorite(entity)} className="btn btn-danger ml-2">Add to Favorites</button>
                </div>
            </div>
        </div>
    );
};

export default EntityCard;

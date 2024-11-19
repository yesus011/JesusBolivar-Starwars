import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Star Wars</span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites {store.favorites.length}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map(favorite => (
                            <div className="dropdown-item d-flex justify-content-between align-items-center" key={favorite.uid}>
                                {favorite.name}
                                <button className="btn btn-danger btn-sm ml-2" onClick={() => actions.removeFavorite(favorite.uid)}>X</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

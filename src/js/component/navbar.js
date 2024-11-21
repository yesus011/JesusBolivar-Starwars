import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);

    // Escucha cambios en el contexto y actualiza el estado local
    useEffect(() => {
        setFavorites(store.favorites);
    }, [store.favorites]);

    const handleRemoveFavorite = (uid) => {
        actions.removeFavorite(uid);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Star Wars</span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"  aria-expanded="false">
                        Favorites ({favorites.length})
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        {favorites.length === 0 ? (
                            <div className="dropdown-item">0 favorites</div>
                        ) : (
                            favorites.map(favorite => (
                                <li className="dropdown-item d-flex justify-content-between align-items-center" key={favorite.uid}>
                                    {favorite.name}
                                    <button className="btn btn-danger btn-sm ml-2" onClick={() => handleRemoveFavorite(favorite.uid)}>X</button>
                                </li>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

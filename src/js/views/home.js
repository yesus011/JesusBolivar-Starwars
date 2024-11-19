import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EntityCard from "../component/EntityCard";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1>People</h1>
            <div className="row">
                {store.people.map(person => (
                    <EntityCard key={person.uid} entity={person} type="people" />
                ))}
            </div>
            <h1>Vehicles</h1>
            <div className="row">
                {store.vehicles.map(vehicle => (
                    <EntityCard key={vehicle.uid} entity={vehicle} type="vehicles" />
                ))}
            </div>
            <h1>Planets</h1>
            <div className="row">
                {store.planets.map(planet => (
                    <EntityCard key={planet.uid} entity={planet} type="planets" />
                ))}
            </div>
        </div>
    );
};

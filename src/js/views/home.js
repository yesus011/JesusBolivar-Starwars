import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EntityCard from "../component/EntityCard";
import "../../styles/index.css"

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container" >
            <div className="row " id="">
                <h1 className="ms-2 mt-3">People</h1>
                <div className="col-12 scroll-character">




                    {store.people.map(person => (
                        <div className="container ">
                            <EntityCard key={person.uid} entity={person} type="people" />
                        </div>
                    ))}
                </div>
            </div>




            <div className="row">
                <h1 className="ms-2 mt-3">Vehicles</h1>
                <div className="col-12 scroll-character">
                    {store.vehicles.map(vehicle => (
                        <div className="container ">
                            <EntityCard key={vehicle.uid} entity={vehicle} type="vehicles" />
                        </div>
                    ))}
                </div>
            </div>



            <div className="row">
                <h1 className="ms-2 mt-3">Planets</h1>
                <div className="col-12 scroll-character">
                    {store.planets.map(planet => (
                        <div className="container">
                            <EntityCard key={planet.uid} entity={planet} type="planets" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

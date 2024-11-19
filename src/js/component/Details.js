import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
    const { type, id } = useParams();
    const { store } = useContext(Context);
    const [entity, setEntity] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                const data = await response.json();
                if (response.ok) {
                    setEntity(data.result.properties);
                }
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };

        fetchData();
    }, [type, id]);

    return (
        <div className="container">
            {entity ? (
                <div>
                    <h1>{entity.name}</h1>
                    <p><strong>Eye color:</strong> {entity.eye_color}</p>
                    <p><strong>Hair color:</strong> {entity.hair_color}</p>
                    <p><strong>Gender:</strong> {entity.gender}</p>
                    {/* Agrega más detalles aquí */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

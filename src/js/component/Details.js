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
                if (response.ok && data.result) {
                    setEntity(data.result.properties);
                } else {
                    console.error("Error: La respuesta de la API no es correcta o los datos están incompletos.");
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
                <>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${id}.jpg`} className="img-fluid mb-4" alt={entity.name} />
                        </div>
                        <div className="col-md-8">
                            <h1>{entity.name}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tincidunt erat, ac imperdiet libero. Fusce euismod justo ligula, ut semper neque facilisis finibus. Phasellus aliquet pharetra sodales. Cras sem ipsum, porttitor quis ultrices quis, sagittis sit amet nisl. Nulla magna nisl, convallis in erat ut, placerat elementum sapien. Sed pellentesque lobortis libero, vel hendrerit felis dapibus sed. Donec ullamcorper, felis quis dapibus tincidunt, turpis est tempor sem, a lacinia magna nisi non justo. Proin est purus, feugiat ac metus in, faucibus ultricies lorem. Sed quis rutrum ipsum. Integer luctus imperdiet tellus, eget gravida eros volutpat non. Etiam faucibus eget.</p>
                            <div className="col-12">
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-2 ">
                            <h4 className="text-danger text-center"><strong>Name</strong></h4>
                            <p className="text-center">{entity.name}</p>
                        </div>
                        <div className="col-md-2">
                            <h4 className="text-danger text-center"><strong>Birth Year</strong></h4>
                            <p className="text-center">{entity.birth_year}</p>
                        </div>
                        <div className="col-md-2">
                            <div className="">
                                <h4 className="text-danger text-center"><strong>Gender</strong></h4>
                                <p className="text-center">{entity.gender}</p>
                            </div>

                        </div>
                        <div className="col-md-2">
                            <h4 className="text-danger text-center"><strong>Height</strong></h4>
                            <p className="text-center">{entity.height}</p>
                        </div>
                        <div className="col-md-2">
                            <h4 className="text-danger text-center"><strong>Skin Color</strong></h4>
                            <p className="text-center">{entity.skin_color}</p>
                        </div>
                        <div className="col-md-2">
                            <h4 className="text-danger text-center"><strong>Eye Color</strong></h4>
                            <p className="text-center">{entity.eye_color}</p>
                        </div>


                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

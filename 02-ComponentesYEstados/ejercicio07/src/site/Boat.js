import React, { useState } from 'react';

function Boat(props) {
    let [crew, setCrew] = useState(props.boat.tripulantes);

    function addCrew() {
        setCrew(props.boat.tripulantes + 1);
        props.boat.tripulantes++;
    }

    return (
        <div className="boat">
            <p><b>Nombre: </b>{props.boat.nombre}</p>
            <p><b>Eslora: </b>{props.boat.eslora}</p>
            <p><b>Tripulantes: </b>{crew}</p>
            <button onClick={addCrew}>Añadir tripulante +</button>
        </div>
    );
}

export default Boat;
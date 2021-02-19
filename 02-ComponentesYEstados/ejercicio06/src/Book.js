import React, { useState } from 'react';

function Book(props) {
    let [stock, setStock] = useState(props.libreria.libros[props.index].stock);

    function substractStock() {
        if (stock > 1) {
            setStock(+props.libreria.libros[props.index].stock - 1);
        }
        else {
            setStock("No quedan copias");
            document.getElementById(`btn_${props.id}`).disabled = true;
        }
        props.libreria.libros[props.index].stock = +props.libreria.libros[props.index].stock - 1;
    }

    return (
        <div className="book">
            <div className="left">
                <h1>{props.libreria.libros[props.index].titulo}</h1>
                <h2>{props.libreria.libros[props.index].autor}</h2>
                <hr />
                <p>{props.libreria.libros[props.index].descripcion}</p>
                <hr />
                <div className="stock">
                    <p>{stock}</p>
                    <button onClick={substractStock} id={"btn_" + props.id}>Click me!</button>
                </div>
            </div>
            <div className="right">
                <img src={props.libreria.libros[props.index].img} />
            </div>
        </div >
    );
}

export default Book;
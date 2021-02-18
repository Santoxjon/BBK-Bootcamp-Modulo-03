function FordFocus(props) {
    return(
        <>
            <h1>Ford Focus</h1>
            <p>
                Número de ruedas: {props.wheels}
            </p>
            <p>
                Altura: {props.height}
            </p>
            <p>
                Longitud: {props.length}
            </p>
            <p>
                Color: {props.color}
            </p>
        </>
    )
}

export default FordFocus;
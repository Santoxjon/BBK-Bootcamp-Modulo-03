let elements = ["Manzana", "Pera", "Ciruela"]

function Elementos() {
    let elementList = elements.map((element) =>
        <li>{element}</li>
    );
    return (
        <>
            <ul>{elementList}</ul>
        </>
    )
}

export default Elementos;
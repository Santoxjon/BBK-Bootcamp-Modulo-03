let evento =
{
    nombre: "Salsa dance party",
    fecha: "24/07/2020",
    hora: "16:00",
    lugar:
    {
        direccion: "Done Bikendi Kalea, 2",
        ciudad: "Bilbao"
    }
}

const recursiveSearch = (obj, results = []) => {
    const r = results;
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value !== 'object') {
            r.push(key + ": " + value);
        } else if (typeof value === 'object') {
            recursiveSearch(value, r);
        }
    });
    return r;
};

function Evento() {
    let values = recursiveSearch(evento);
    let listItems = values.map((value) => <li>{value}</li>);
    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}

export default Evento;
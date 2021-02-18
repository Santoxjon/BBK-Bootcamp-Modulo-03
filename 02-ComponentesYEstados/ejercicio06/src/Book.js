function Book(props) {
    return (
        <div className="book">
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <p>{props.description}</p>
            <img src={props.image} />
            <p>{props.stock}</p>
        </div>
    );
}

export default Book
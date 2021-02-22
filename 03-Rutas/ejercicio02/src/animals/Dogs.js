function Dogs(params) {
    let dogsList = params.dogimages.map(dogimage =>
        <img src={dogimage} />
    );
    return (
        <>{dogsList}</>
    )
}

export default Dogs;
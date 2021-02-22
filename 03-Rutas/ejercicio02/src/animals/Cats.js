function Cats(params) {
    let catsList = params.catimages.map(catimage =>
        <img src={catimage} />
    );
    return (
        <>{catsList}</>
    )
}

export default Cats;
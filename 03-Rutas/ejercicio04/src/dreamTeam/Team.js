function Team(params) {
    return (
        <div id="team">
            <img src={params.team.image} />
            <p>{params.team.name}</p>
        </div>
    )
}

export default Team;
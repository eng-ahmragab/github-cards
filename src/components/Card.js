

function Card({ profile }) {
    return (
        <div className="card">

            <div className="card-body d-flex">
                <img src={profile.avatar_url} width="100" alt="" />

                <ul className="list-unstyled ml-2">
                    <li>
                        <h5>
                            <a href={profile.html_url} target="_blank" className="text-decoration-none" rel="noreferrer">
                                {profile.login}
                            </a>
                        </h5>
                    </li>
                    <li> {profile.name} </li>
                    <li> {profile.location} </li>
                </ul>

            </div>


        </div>
    )
}

export default Card

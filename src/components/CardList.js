
import Card from "./Card";

function CardList( { profiles } ) {


    return (
        <div className="mt-3">
            { profiles.map( (profile) => 
                <Card key={profile.login} profile={profile}/> 
            )} 
        </div>
    )
}

export default CardList

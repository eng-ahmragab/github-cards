
function CardPreview({ data, error }) {

        if (error) {
            return (<p className="text-danger"> {error} </p>);
        
        } else if (data) {
            return (
                <div className="card github-card mt-2 mb-3">

                <div className="d-flex"> 

                    <img src={data.avatar_url} width="50" alt="" />

                    <ul className="list-unstyled ml-2">
                        <li> <strong> {data.login} </strong> </li>
                        <li> {data.location} </li>
                    </ul>
                    </div>


                </div>

            );
            
        } else{
            return ( <> </> );
        }

}

export default CardPreview;
import { useState } from "react";

import Header from "./components/Header";
import AddCardForm from "./components/AddCardForm";
import CardPreview from "./components/CardPreview";
import LoadingSpinner from "./components/LoadingSpinner";
import CardList from "./components/CardList";

import {useFetch} from "./hooks/useFetch";






function App() {

    const [username, setUsername] = useState("");
    const [profiles, setProfiles] = useState([]);
    
    const apiToken = process.env.REACT_APP_GITHUB_API_KEY;
    const url = username? `https://api.github.com/users/${username}` : null;

    const {loading, data, error} = useFetch(url, apiToken);


    let addDisabled = data? false:true;

    const handleAddCard = (e) => {
        e.preventDefault();
        setProfiles([...profiles, data]);
        setUsername("");
    }

    


    return (
        <div className="container mt-5">


            <Header title={"GitHub Cards"} />

            <AddCardForm
                username={username}
                handleUpdateUsername={(e) => setUsername(e.target.value)}
                handleAddCard={handleAddCard}
                addDisabled={addDisabled}
            />


            { loading?
                <LoadingSpinner />
                : <CardPreview data={data} error={error} />
            }


            <CardList profiles={profiles} />










        </div>
    );
}

export default App;

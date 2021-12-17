import {useState, useEffect} from "react";


export function useFetch(url, apiToken=null){

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!url) {
            setLoading(false);
            setData(null);
            setError(null);
            return;
        }

        const headers = apiToken? { authorization: `token ${apiToken}` } : {}

        setLoading(true);
        fetch (url, {headers: headers})
        .then((resp) => {
            if (!resp.ok) { // check if the status code wasn't 2xx
                throw new Error("couldn't fetch data for that resource.");
            } else {
                return resp.json();
            }
        })
        .then((data) => {
            setData(data);
            setError(null);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setData(null);
            setLoading(false);
        });
    }, [url, apiToken]);



    return { loading, data, error };

}
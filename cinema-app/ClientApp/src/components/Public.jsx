import { useState, useEffect, useCallback } from "react";
import { Spinner, Alert, Button } from "reactstrap";
import axios from "axios";

const Public = () => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const FetchData = useCallback(() => {
        setIsLoading(true);
        setError(false);
        axios.get("api/dices", {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                if (error.response) {
                    setError({ status: error.response.status, text: error.response.statusText });
                }
                else {
                    setError({ status: 0, text: "Neznámá chyba" });
                    setResponse(null);
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
    },[]);

    useEffect(() => {
        FetchData();
    }, []);

    if (isLoading) {
        return <Spinner />
    } else if (error) {
        return <Alert color="danger">Při získávání dat došlo k chybě.</Alert>
    } else if (response) {
        return <p><span classname="m-2">{response.roll}</span> <Button onClick={e => { FetchData() }}>Roll</Button></p>
    } else {
        return <Spinner />
    }
}

export default Public;
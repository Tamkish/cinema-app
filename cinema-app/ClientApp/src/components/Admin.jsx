import { useRequireAuth } from "./Auth/useRequireAuth";
import { useState, useEffect, useCallback } from "react";
import { Spinner, Alert, Button } from "reactstrap";
import { useAuthContext } from "../providers/AuthProvider";
import axios from "axios";

const Admin = () => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [{ accessToken }] = useAuthContext();
    useRequireAuth();
    const FetchData = useCallback(() => {
        setIsLoading(true);
        setError(false);
        axios.get("api/dices/hexadecimal", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken
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
    }, []);

    useEffect(() => {
        FetchData();
    }, []);

    if (isLoading) {
        return <Spinner color="primary" />
    } else if (error) {
        return <Alert color="danger">Při získávání dat došlo k chybě.</Alert>
    } else if (response) {
        return <p><span classname="m-2">{response.roll}</span> <Button onClick={e => { FetchData() }}>Roll</Button></p>
    } else {
        return <Spinner />
    }
}

export default Admin;
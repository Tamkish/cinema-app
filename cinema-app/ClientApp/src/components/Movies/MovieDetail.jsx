import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { apiURL } from "../../configuration/api";

export const MovieDetail = () => {
    let { id } = useParams();
    
    let [movie, setMovie] = useState({});
    
    const [isLoading, setLoading] = useState(false);

    const update = () =>{
        
        axios
        .get(apiURL+"movies/"+id)
        .then(response => {
          console.log(response);
          setMovie(response.data);
          setLoading(false);
        })
        .catch(error => {console.log(error)})
    }
    
    useEffect(()=>{
        setLoading(true);
        update();
      },[]);

    

if (isLoading) {
    return(
        <div>loading</div>
        )
}else{


    return(
        <div>
            <div>movie number: {id}</div>
            <div>name: {movie.name}</div>
            <div>Released: {movie.releaseDate}</div>
        </div>
    )
}

}
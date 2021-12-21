import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../../configuration/api";

export const MovieList = () => {
  
      const update = () => {
        
          axios
            .get(apiURL+"movies")
            .then(response => {
              console.log(response);
              setMovies(response.data);
            })
            .catch(error => {console.log(error)})
      }

    const [movies, setMovies] = useState()

    useEffect(()=>{
      update();
    },[]);

    return (
      <div className="text-center">
          Movies here
          <button onClick={update}>update</button>
      </div>
    );
}

export default MovieList;
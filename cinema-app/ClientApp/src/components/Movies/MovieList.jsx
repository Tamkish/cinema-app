import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../../configuration/api";
import { useAuthContext } from "../../providers/AuthProvider";
import { MovieTitle } from "./MovieTitle";

export const MovieList = () => {
  
      const update = () => {
        
          axios
            .get(apiURL+"movies")
            .then(response => {
              console.log(response);
              setMovies(response.data);
              setLoading(false);
            })
            .catch(error => {console.log(error)})
      }

    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true);
      update();
    },[]);

    if(isLoading){
return(<div className="text-center">loading</div>)
    }else{
      return (
        <div className="text-center">
          {
            
              movies.map((movie,index)=>{
                return(<MovieTitle movie={movie} key={movie.id}/>)
              })
            
          }
      </div>
    );

  }
}

export default MovieList;
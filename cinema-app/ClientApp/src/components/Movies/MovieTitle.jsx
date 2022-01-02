import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { NavItem } from "reactstrap"

export const MovieTitle = (props) => 
{
    let movie = props.movie

    return(
        <div>[{movie.name}]: 
                <Link to={"/movies/"+movie.id}>details</Link>
            
        </div>)
}

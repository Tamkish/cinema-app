import { useAuthContext } from "../providers/AuthProvider";
import { Button } from 'reactstrap';

const Home = () => {
    const [{ userManager, accessToken }] = useAuthContext();
    return (
        <div className="text-center">
            <div>
                zde budou Screenings
            </div>
            {
            accessToken
                ? <Button color="danger" onClick={() => { userManager.signoutRedirect() }} >Odhlásit</Button>
                : <Button color="success" onClick={() => { userManager.signinRedirect() }} >Přihlásit</Button>
            }
        </div>
        );
}

export default Home;
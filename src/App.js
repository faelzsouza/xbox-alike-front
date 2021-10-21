import { Route, Switch } from "react-router";
import "./App.css";
import GuardedRoute from "./components/auth/GuardedRoute/GuardedRoute";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import EditGame from "./pages/EditGame/EditGame";
import FavoriteGames from "./pages/Home/components/FavoriteGames/FavoriteGames";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import NewGame from "./pages/NewGame/NewGame";
import NewProfile from "./pages/NewProfile/NewProfile";
import NewUser from "./pages/NewUser/NewUser";
import Profiles from "./pages/Profiles/Profiles";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <GuardedRoute path="/" exact={true} component={Home} />
                <GuardedRoute path="/game/new" component={NewGame} />
                <GuardedRoute path="/profiles" component={Profiles} />
                <GuardedRoute
                    path="/games/favorites"
                    component={FavoriteGames}
                />
                <GuardedRoute path="/profile/create" component={NewProfile}/>
                <GuardedRoute path="/game/edit/:gameId" component={EditGame}/>
                <Route path="/user/create" component={NewUser} />
                <Route path="/logout" component={Logout} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;

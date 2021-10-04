import "./App.css";
import { Route, Switch } from "react-router";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
              <Route path='/' exact={true} component={Home} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;

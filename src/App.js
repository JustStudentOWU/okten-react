import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home page</Link>
                <Link to={'/users'}>users</Link>
            </div>

            <Switch>
                <Route path={'/users'} render={() => {
                    return <Users/>
                }}/>
            </Switch>
        </Router>
    );
}

export default App;

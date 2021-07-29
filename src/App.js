import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home page</Link>
                <Link to={'/users'}>users</Link>
            </div>

            <Switch>
                <Route />
            </Switch>
        </Router>
    );
}

export default App;

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/'}>Home page</Link></div>
                <div><Link to={'/users'}>Users</Link></div>
                <div><Link to={'/posts'}>Posts</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
            </div>

            <Switch>
                <Route exact={true} path={'/'}/>
                <Route path={'/users'} render={() => {
                    return <Users/>
                }}/>
                <Route path={'/posts'} render={() => {
                    return <Posts/>
                }}/>
                <Route path={'/comments'} render={() => {
                    return <Comments/>
                }}/>
            </Switch>
        </Router>
    );
}

export default App;

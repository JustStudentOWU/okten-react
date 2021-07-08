import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";


function App() {

  return (
      <Router>
          <div>
              <div><Link to={'/'}>Home</Link></div>
              <div><Link to={'/users'}>Users</Link></div>
              <div><Link to={'/posts'}>Posts</Link></div>
              <div><Link to={'/comments'}>Comments</Link></div>
          </div>
          <Switch>
              <Route path={'/'} exact={true}/>
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
      //<button onClick={() => dispatch({type: 'INC_A', payload: 1})}> click me A {a}</button>
  );
}

export default App;

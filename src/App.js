import './App.css';

import {getUsers,} from "./services/api";
import Users from "./components/Users/Users";
import React, {useEffect, useState} from "react";

function App() {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(res => setUsers(res.data))
    },[])


  return (
    <div>
        <Users item={users} userPost={userPost}/>
    </div>
  );
}

export default App;

import {useEffect, useState} from "react";
import {getUsers} from "../../services/api";
import User from "../User/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetails from "../UserDetails/UserDetails";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(value => setUsers([...value.data]))
    },[])

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }

            <Route path={'/users/:id'} component={UserDetails}/>
        </div>
    )
}

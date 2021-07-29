import {useEffect, useState} from "react";
import {getUsers} from "../../services/api";
import User from "../User/User";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(value => console.log(value))
    },[])

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    )
}

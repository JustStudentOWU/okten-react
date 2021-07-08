import User from "../User/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api"

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    })
    return (
        <div>
            {users.map(value => <User item={value} key={value.id}/>)}
        </div>
    )
}

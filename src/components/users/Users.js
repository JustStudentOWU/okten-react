import {useState, useEffect} from "react";
import User from "./User";

export default function Users() {

    let [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
            .then(value => value.json())
            .then(value => setUsersList(value));
    })

    return (
        <div>
            {
                usersList.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    )
}

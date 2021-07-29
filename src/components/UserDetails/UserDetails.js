import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/api";

export default function UserDetails(props) {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(()=> {
        getUser(id).then(value => setUser({...value.data}))
    }, [id]);

    return (
        <div>
            <hr/>
            {user.id} - {user.name} - {user.email}
            <hr/>
        </div>
    )
}

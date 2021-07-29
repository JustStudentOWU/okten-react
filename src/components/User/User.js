import UserPost from "../UserPosts/UserPost";
import {getUserPosts} from "../../services/api";
import {useState} from "react";

export default function User(props) {

    let {item} = props;
    const [userPosts, setUserPosts] = useState([]);
    const [toggle, setToggle] = useState(false);
    function showPosts (id) {
        setToggle(!toggle)
        getUserPosts(id).then(res => setUserPosts(res.data))
    }
    return (
        <div>
            {item.id} - {item.name} - {item.email} - <button onClick={() => showPosts(item.id)}
        >show post</button>
            <hr/>
            {
                toggle && userPosts && userPosts.map(value => <UserPost item={value} key={value.id}/>)
            }
        </div>
    )
}

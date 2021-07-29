import {useState} from "react";
import {getPostComments} from "../../services/api"
import PostComments from "../PostComments/PostComments";

export default function UserPosts({item}) {
    const [postComments, setPostComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    function showComments (id) {
        getPostComments(id).then(value => setPostComments(value.data));
        setToggle(!toggle)
    }

    return(
        <div>
            {item.id} - {item.title} - {item.body} - <button onClick={() => showComments(item.id)}>show comments</button>
            <hr/>
            {
                toggle && postComments && postComments.map(value => <PostComments item={value} key={value.id}/> )
            }
        </div>
    )
}

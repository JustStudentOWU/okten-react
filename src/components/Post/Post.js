import {useState} from "react";
import {getPostComments} from "../../services/api";
import PostComments from "../PostComments/PostComments";

export default function Post({item}) {
    const [postComments, setPostComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    function showComments (id) {
        setToggle(!toggle);
        getPostComments(id).then(value => setPostComments(value.data))
    }

    return(
        <div>
            {item.id} - {item.title} - {item.body} - <button onClick= {() => {
                    showComments(item.id)
                }
            }>show comments</button>
            <hr/>
            {
                toggle && postComments && postComments.map(value => <PostComments key={value.id} item={value}/>)
            }
        </div>
    )
}

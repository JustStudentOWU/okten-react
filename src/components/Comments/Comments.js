import Comment from "../Comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../services/api"

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value.data))
    },[])
    return (
        <div>
            {comments.map(value => <Comment item={value} key={value.id}/>)}
        </div>
    )
}

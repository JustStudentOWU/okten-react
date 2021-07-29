import {useEffect, useState} from "react";

export default function PostDetail(props) {
    const {location: {state}} = props;
    const [post, setPost] = useState({});

    useEffect(() => {
        setPost({...state})
    },[state])

    return (
        <div>
            <hr/>
            {post.id} - {post.title} - {post.body}
            <hr/>
        </div>
    )
}

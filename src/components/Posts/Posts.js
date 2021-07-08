import Post from "../Post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/api"

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    },[])

    return(
        <div>
            {posts.map(value => <Post item={value} key={value.id}/>)}
        </div>
    )
}

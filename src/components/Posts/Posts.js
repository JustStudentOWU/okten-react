import {useEffect, useState} from "react";
import {getPosts} from "../../services/api";
import Post from "../Post/Post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from "../PostDetails/PostDetails";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    },[])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
            <Route path={'/posts/:id'} component={PostDetail}/>
        </div>
    )
}

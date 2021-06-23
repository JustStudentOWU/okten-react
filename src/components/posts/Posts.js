import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts() {

    let [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(value => value.json())
            .then(value => {
                setPostList(value);
            });
    },[]);
    return (
        <div>
            {
                postList.map(value => <Post key = {value.id} item = {value}/>)
            }
        </div>
    );
}


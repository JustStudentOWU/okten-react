import {useState, useEffect} from "react";
import Comment from "./Comment";

export default function Comments() {

    let [commentsList, setCommentsList] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            .then(value => value.json())
            .then(value => setCommentsList(value));
    })
    return (
        <div className={'comments'}>
            {
                commentsList.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    )
}

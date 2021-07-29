import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useEffect, useState} from "react";
import {getComments} from "../../services/api";
import Comment from "../Comment/Comment";
import CommentDetails from "../CommentDetails/CommentDetails";

export default function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments([...value.data]))
    },[])
    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
            <Route path={'/comments/:id'} component={CommentDetails}/>
        </div>
    )
}

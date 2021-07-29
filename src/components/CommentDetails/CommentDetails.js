import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getComment} from "../../services/api";

export default function CommentDetails(props) {
    // const {id} = useParams();
    // const [comment, setComments] = useState({});
    // useEffect(() => {
    //     getComment(id).then(value => setComments({...value.data}))
    // },[id])

    const {location: {state}} = props;
    const [comment, setComment] = useState({});
    useEffect(() => {
        setComment({...state})
    },[state])

    return (
        <div>
            <hr/>
            {comment.id} - {comment.name} - {comment.body}
            <hr/>
        </div>
    )
}

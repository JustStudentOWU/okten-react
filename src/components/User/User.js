// import {getUserPosts} from "../../services/api"
// import {useState} from "react";
// import UserPosts from "../UserPosts/UserPost";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link, BrowserRouter
// } from "react-router-dom";
// export default function User({item}) {
//
//     const [userPosts, setUserPosts] = useState([]);
//     const [toggle, setToggle] = useState(false);
//     function showPosts (id) {
//         getUserPosts(id).then(value => setUserPosts(value.data));
//         setToggle(!toggle)
//     }
//     return(
//         <Router>
//         <div>
//             {item.id} - {item.name} - {item.email} -
//             <button><link to={'/users/' + item.id + '/posts'}>show Posts</link></button>
//             <hr/>
//         </div>
//
//         <Switch>
//             <Route path={'/users/' + item.id + '/posts'} render={() => <UserPosts/>}/>
//         </Switch>
//     </Router>
//     )
// }

export default function User({item}) {

    return (
        <div>
            {item.id} - {item.name} - <button>show post</button>
        </div>
    )
}

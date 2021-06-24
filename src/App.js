import {useEffect, useState} from "react";
import {getPost, getPosts, getUser, getUsers} from "./services/api";
import ChoosePost from "./components/ChoosePost/ChoosePost";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

function App() {

    let [posts, setPosts] = useState([]);
    let [selectPost, setSelectPost] = useState(null);
    let [users, setUsers] = useState([]);
    let [selectUser, setSelectUser] = useState(null)

    useEffect(()=> {
        getPosts().then(res => {
            setPosts(res.data)
        })
    },[]);

    useEffect(() => {
        getUsers().then(res => {
            setUsers(res.data)
        })
    },[]);

    function choosePost(id) {
        getPost(id).then(res => {
            setSelectPost(res.data)
        })
    }

    function chooseUser(id) {
        getUser(id).then(res => {
            setSelectUser(res.data)
        })
    }

    return (
    <div>
        <Users item={users} chooseUser={chooseUser} selectUser={selectUser} />

      <Posts item={posts} choosePost={choosePost}/>
      <hr/>
        {
            selectPost && <ChoosePost item={selectPost}/>
        }
    </div>
  );
}

export default App;

import './App.css';
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";

export default function App() {
  return (
    <div>
        <div>
            <Posts/>
        </div>
        <div>
            <Users />
        </div>
    </div>
  );
}


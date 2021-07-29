import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function User({item}) {

    return (
        <div>
            {item.id} - {item.name} - <Link to={'/users/' + item.id}>details</Link>

        </div>
    )
}

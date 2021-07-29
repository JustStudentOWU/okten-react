import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Comment({item}) {

    return (
        // <div>
        //     {item.id} - {item.name} - <Link to={'/comments/' + item.id}>details</Link>
        // </div>

        <div>
            {item.id} - {item.name} - <Link to={
                {
                    state: item,
                    pathname: '/comments/' + item.id
                }
            }>details</Link>
        </div>
    )
}

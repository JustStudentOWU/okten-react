import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Post({item}) {

    return (
        <div>
            {item.id} - {item.title} - <Link to={
                {
                    pathname: '/posts/' + item.id,
                    state: item
                }
            }>details</Link>
        </div>
    )
}

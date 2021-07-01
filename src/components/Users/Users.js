import User from "../User/User";

export default function Users(props) {

    let {item, userPost} = props;
    return (
        <div>
            {
                item.map(value => <User key={value.id} item={value} userPost={userPost}/>)
            }
        </div>
    )
}

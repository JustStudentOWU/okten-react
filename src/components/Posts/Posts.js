import Post from "../Post/Post";

export default function Posts(props) {
let {item, choosePost} = props;
    return (
        <div>
            {
                item.map(value => <Post item={value} key={value.id} choosePost={choosePost}/>)
            }
        </div>
    )
}

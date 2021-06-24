export default function Post(props) {
 let {item, choosePost} = props;

    return (
        <div>
            {item.id} - {item.email} - {item.name}
            <button onClick={() => {
                    choosePost(item.id)
            }}>Show post</button>
        </div>
    )
}

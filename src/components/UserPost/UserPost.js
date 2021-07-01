export default function UserPost(props) {

    let {item} = props
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.body}</p>
        </div>
    )
}

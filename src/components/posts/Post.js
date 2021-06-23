export default function Post({item: {id, title, body}}) {

    return (
        <div className={'posts'}>
            <h1>{id} - {title}</h1>
            <p>{body}</p>
        </div>
    )
}

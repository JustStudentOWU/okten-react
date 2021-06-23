export default function Comment({item: {id, name, email, body}}) {

    return (
        <div className={'comment'}>
            <h1>{id} - {email}</h1>
            <p>{name}</p>
            <p>{body}</p>
        </div>
    )
}

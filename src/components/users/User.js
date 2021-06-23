export default function User({item: {id, name, username, email}}) {

    return (
        <div className={'user'}>
            <h1>{id} {name} - {username}</h1>
            <p>{email}</p>
        </div>
    )
}

export default function User(props) {
    let {item,chooseUser} = props;

    return (
        <div>
            {item.id} - {item.email} -
            <button onClick={() => chooseUser(item.id)}>show info</button>
        </div>
    )
}

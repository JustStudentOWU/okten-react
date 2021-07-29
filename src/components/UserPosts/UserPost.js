export default function UserPosts({item}) {

    return(
        <div>
            {item.id} - {item.title} - {item.body}
            <hr/>
        </div>
    )
}

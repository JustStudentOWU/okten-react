import User from "../User/User";
import ChooseUser from "../ChooseUser/ChooseUser";

export default function Users(props) {
    let {chooseUser,item,selectUser} = props;

    return (
        <div>
            {
                item.map(value => <User item={value} key={value.id} chooseUser={chooseUser}
                />
                )

            }
            {
                selectUser && <ChooseUser item={selectUser}/>
            }
        </div>
    )
}

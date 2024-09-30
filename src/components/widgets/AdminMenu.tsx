import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

export const AdminMenu = () => {
    const currUser = useSelector(selectUser);

    return (
        currUser?.role === 'admin' &&
        <div className="aside-item">
            <h4>Admin Menu ⚙️</h4>
            <ul className="list-disc ml-4">
                <li key='users'><NavLink to='/users'>Users</NavLink></li>
                <li key='add-users'><NavLink to='/users/add'>Add new user</NavLink></li>
            </ul>
        </div>
    )
}
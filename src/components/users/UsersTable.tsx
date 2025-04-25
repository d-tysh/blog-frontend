import { IUser } from "../../interfaces/interfaces"
import { NavLink } from "react-router-dom"
import { userStatus } from "../../utils/userStatus"

export const UsersTable = ({ users }: { users: IUser[] }) => {
    return (
        <table className="w-[100%] mb-4">
            <thead className="text-left">
                <tr className="text-center">
                    <th></th>
                    <th>Online</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr key={user._id}
                            className={`${user.role === 'admin' ? 'bg-orange-300 hover:bg-orange-400' : 'hover:bg-slate-300'}`}
                        >
                            <td className="text-center w-[100px]">
                                <NavLink to={`/users/${user._id}`}>✎ Edit</NavLink>
                            </td>
                            <td className="text-center">{userStatus(user.isOnline)}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>)
                }
            </tbody>
        </table>
    )
}
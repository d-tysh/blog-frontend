import classNames from "classnames"
import { IUser } from "../../interfaces/interfaces"
import { NavLink } from "react-router-dom"

export const UsersTable = ({ users }: { users: IUser[] }) => {
    return (
        <table className="w-[100%] mb-4">
            <thead className="text-left">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr key={user._id}
                            className={classNames({ 'bg-orange-300': user.role === 'admin' })}
                        >
                            <td className="text-center w-[100px]">
                                <NavLink to={`/users/${user._id}`}>✎ Edit</NavLink>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>)
                }
            </tbody>
        </table>
    )
}
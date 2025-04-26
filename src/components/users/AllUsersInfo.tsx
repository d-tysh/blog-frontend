import { useSelector } from "react-redux";
import { selectAllUsers, selectIsLoading } from "../../redux/users/selectors";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/users/actions";
import { Loader } from "../Loader";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { UsersTable } from "./UsersTable";

export const AllUsersInfo = () => {
    const users = useSelector(selectAllUsers);
    const isLoading = useSelector(selectIsLoading);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between my-2 gap-2">
                <Button text="➕ Add new user" onClick={() => navigate('/users/add')} />
                <Button text="⟳ Refresh users list" onClick={() => dispatch(getAllUsers())} />
            </div>
            {isLoading && <Loader />}
            {
                !isLoading && users &&
                <div className="overflow-x-auto">
                    <UsersTable users={users} />
                </div>
            }
        </>
    )
}
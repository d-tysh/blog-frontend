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
            {isLoading && <Loader />}
            {
                !isLoading && users && <UsersTable users={users} />
            }
            <div className="flex justify-end mb-2">
                <Button text="➕ Add new user" onClick={() => navigate('/users/add')} />
            </div>
        </>
    )
}
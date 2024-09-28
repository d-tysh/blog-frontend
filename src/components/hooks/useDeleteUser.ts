import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { deleteUserById } from "../../redux/users/actions";
import { fetchCurrentUser } from "../../redux/auth/actions";

export const useDeleteUser = (userId: string | undefined) => {
    const currentUser = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onDeleteUser = () => {
        if (currentUser && userId) {
            dispatch(deleteUserById(userId))
                .then(() => {
                    if (currentUser.role === 'admin'){
                        navigate('/users');
                    } 
                    else {
                        dispatch(fetchCurrentUser())
                        navigate('/');
                    }
                })
        }
    }

    return { onDeleteUser }
}
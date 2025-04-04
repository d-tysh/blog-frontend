import { SubmitHandler } from "react-hook-form";
import { IUserInfo } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../hooks";
import { updateUserInfo } from "../../redux/users/actions";
import { toast } from "react-toastify";
import { fetchCurrentUser } from "../../redux/auth/actions";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export const useUpdateUser = (userId: string | undefined) => {
    const currentUser = useSelector(selectUser);
    const dispatch = useAppDispatch();

    const onUpdateUser: SubmitHandler<IUserInfo> = (userInfo) => {
        if (!userId) {
            return toast.error('Something went wrong...');
        }
        dispatch(updateUserInfo({ userId, userInfo }))
            .unwrap()
            .then((res) => {
                if (currentUser?.id === userId) dispatch(fetchCurrentUser());
                toast.success(res.data.message)
            })
            .catch(error => {
                const errorMessage = error.response.data.message || "Failed to update user";
                toast.error(errorMessage);
            })
    }

    return { onUpdateUser };
}
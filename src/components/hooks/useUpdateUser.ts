import { SubmitHandler } from "react-hook-form";
import { IUserInfo } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../hooks";
import { updateUserInfo } from "../../redux/users/actions";

export const useUpdateUser = (userId: string | undefined) => {
    const dispatch = useAppDispatch();

    const onUpdateUser: SubmitHandler<IUserInfo> = (userInfo) => {
        if (userId) {
            dispatch(updateUserInfo({ userId, userInfo }))
        }
    }

    return { onUpdateUser };
}
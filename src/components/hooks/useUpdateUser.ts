import { SubmitHandler } from "react-hook-form";
import { IUserInfo } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../hooks";
import { getUserInfo, updateUserInfo } from "../../redux/users/actions";
import { fetchCurrentUser } from "../../redux/auth/actions";

export const useUpdateUser = (userId: string | undefined) => {
    const dispatch = useAppDispatch();

    const onUpdateUser: SubmitHandler<IUserInfo> = (userInfo) => {
        if (userId) {
            dispatch(updateUserInfo({ userId, userInfo }))
                .then(() => {
                    dispatch(fetchCurrentUser())
                    dispatch(getUserInfo(userId));
                });
        }
    }

    return { onUpdateUser };
}
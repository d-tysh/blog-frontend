import { useEffect } from "react";
import { useAppDispatch } from "../../hooks"
import { UseFormReset } from "react-hook-form";
import { IUserInfo } from "../../interfaces/interfaces";
import { getUserInfo } from "../../redux/users/actions";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/users/selectors";
import { toast } from "react-toastify";

const useGetUserInfo = (userId: string | undefined, reset: UseFormReset<IUserInfo>) => {
    const userInfo = useSelector(selectUserInfo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(getUserInfo(userId))
                .then(() => {
                    reset({
                        name: userInfo?.name,
                        email: userInfo?.email,
                        role: userInfo?.role
                    })
                })
        } else {
            toast.error('Error: Unable to get user data')
        }
    }, [dispatch, reset, userId, userInfo?.email, userInfo?.name, userInfo?.role])
}

export default useGetUserInfo;
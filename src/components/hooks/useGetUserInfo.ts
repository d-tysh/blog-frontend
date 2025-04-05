import { useEffect } from "react";
import { useAppDispatch } from "../../hooks"
import { UseFormReset } from "react-hook-form";
import { IUserInfo } from "../../interfaces/interfaces";
import { getUserInfo } from "../../redux/users/actions";
import { toast } from "react-toastify";

const useGetUserInfo = (userId: string | undefined, reset: UseFormReset<IUserInfo>) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(getUserInfo(userId))
            .unwrap()
            .then(({ result }) => {
                reset({
                    name: result.name,
                    email: result.email,
                    role: result.role
                })
            })
            .catch(error => {
                const { message } = error.response.data;
                toast.error(message);
            })
        } else {
            toast.error('Error: Unable to get user data')
        }
    }, [dispatch, reset, userId])
}

export default useGetUserInfo;
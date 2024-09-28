import { useSelector } from "react-redux"
import { selectError, selectIsLoading, selectUserInfo } from "../../redux/users/selectors"
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { InputField } from "../forms/InputField";
import { useForm } from "react-hook-form";
import { selectUser } from "../../redux/auth/selectors";
import { IUserInfo } from "../../interfaces/interfaces";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { Button } from "../Button";
import { SelectField } from "../forms/SelectField";
import { useUpdateUser } from "../hooks/useUpdateUser";
import useGetUserInfo from "../hooks/useGetUserInfo";

export const UserInfo = () => {
    const currentUser = useSelector(selectUser);
    const userInfo = useSelector(selectUserInfo);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const { userId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IUserInfo>();
    const { onDeleteUser } = useDeleteUser(userId);
    const { onUpdateUser } = useUpdateUser(userId);

    useGetUserInfo(userId, reset);

    return (
        <>
            { isLoading && !error && <Loader /> }
            {
                !isLoading && !error && userInfo &&
                <form className="flex flex-col mx-auto w-[400px] gap-2">
                    <InputField label='Name:' name='name' required register={register} errors={errors} />
                    <InputField label='Email:' name='email' required register={register} errors={errors} />
                    {
                        currentUser?.role === 'admin' ?
                            <SelectField label="Role" name="role" register={register} options={['admin', 'user']} />
                            :
                            <InputField label='Role:' name='role' required readonly register={register} errors={errors} />
                    }
                    <Button text="📝 Update" onClick={handleSubmit(onUpdateUser)} />
                    <Button text="❌ Delete" type="button" onClick={() => onDeleteUser()}
                        disabled={(currentUser?.role === 'admin') && (userInfo?.role === 'admin')}
                    />
                </form>
            }
        </>
    )
}
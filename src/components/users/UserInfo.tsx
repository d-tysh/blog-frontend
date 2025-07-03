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
import { EMAIL_PATTERN } from "../../utils/constants";
import { Error } from "../Error";

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

    const deleteBtnDisabled = (currentUser?.role === 'admin') && (userInfo?.role === 'admin');

    return (
        <>
            { isLoading && !error && <Loader /> }
            {
                !isLoading && !error && userInfo &&
                <form className="form w-full md:w-[400px]">
                    <InputField label='Name:' name='name' required register={register} errors={errors} minLength={2} />
                    <InputField label='Email:' name='email' required register={register} errors={errors} pattern={EMAIL_PATTERN}/>
                    {
                        currentUser?.role === 'admin' ?
                            <SelectField label="Role:" name="role" register={register} options={['admin', 'user']} />
                            :
                            <InputField label='Role:' name='role' required readonly register={register} errors={errors} />
                    }
                    <Button onClick={handleSubmit(onUpdateUser)}>
                        📝 Update
                    </Button>
                    <Button type="button" onClick={() => onDeleteUser()} disabled={deleteBtnDisabled}>
                        ❌ Delete
                    </Button>
                </form>
            }
            { !isLoading && error && <Error />}
        </>
    )
}
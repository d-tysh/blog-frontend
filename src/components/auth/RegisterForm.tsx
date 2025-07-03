import { useAppDispatch } from "../../hooks";
import { register as userRegister } from "../../redux/auth/actions";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterForm } from "../../interfaces/interfaces";
import { InputField } from "../forms/InputField";
import { Button } from "../Button";
import { EMAIL_PATTERN } from "../../utils/constants";
import { toast } from "react-toastify";

export const RegisterForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IRegisterForm>();
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        dispatch(userRegister(data))
            .unwrap()
            .then((res) => {
                const { message } = res.data;
                toast.success(message);
                reset();
            })
            .catch(error => {
                const { message } = error.response.data;
                toast.error(message);
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form w-full sm:w-[400px]">
            <InputField label='Name' name='name' required
                register={register} errors={errors} minLength={2}
            />
            <InputField label='Email' name='email' required
                register={register} errors={errors} pattern={EMAIL_PATTERN}
            />
            <InputField label='Password' type='password' name='password' required
                register={register} errors={errors} minLength={6}
            />
            <Button isLoading={isLoading}>Register</Button>
        </form>
    )
}
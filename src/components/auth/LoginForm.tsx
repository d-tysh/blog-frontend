import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../hooks";
import { login } from "../../redux/auth/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "../../interfaces/interfaces";
import { InputField } from "../forms/InputField";
import { Button } from "../Button";
import { emailPattern } from "../../constants";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>();
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        dispatch(login(data));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto w-[400px] gap-2">
            <InputField label='Email' name='email' required 
                register={register} errors={errors} pattern={emailPattern}
            />
            <InputField label='Password' type='password' name='password' required 
                register={register} errors={errors} 
            />
            <Button text='Login' isLoading={isLoading} />
        </form>
    )
}
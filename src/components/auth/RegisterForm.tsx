import { useAppDispatch } from "../../hooks";
import { register as userRegister } from "../../redux/auth/actions";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterForm } from "../../interfaces/interfaces";
import { InputField } from "../forms/InputField";
import { getAllUsers } from "../../redux/users/actions";
import { Button } from "../Button";
import { emailPattern } from "../../constants";

export const RegisterForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IRegisterForm>();
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        dispatch(userRegister(data));
        dispatch(getAllUsers());
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form w-full sm:w-[400px]">
            <InputField label='Name' name='name' required 
                register={register} errors={errors} 
            />
            <InputField label='Email' name='email' required 
                register={register} errors={errors} pattern={emailPattern}
            />
            <InputField label='Password' type='password' name='password' required 
                register={register} errors={errors} 
            />
            <Button text='Register' isLoading={isLoading} />
        </form>
    )
}
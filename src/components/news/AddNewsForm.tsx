import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/news/selectors";
import { useAppDispatch } from "../../hooks";
import { addNews, fetchLastNews } from "../../redux/news/actions";
import { InputField } from "../forms/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { INews } from "../../interfaces/interfaces";
import { useEffect } from "react";
import { TextareaField } from "../forms/TextareaField";
import { Button } from "../Button";
import { toast } from "react-toastify";
import sanitizeNews from "../../utils/sanitizeData";
import errorNotify from "../../utils/errorNotify";

export const AddNewsForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<INews>();
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        reset({
            date: today
        })
    }, [reset])

    const onSubmit: SubmitHandler<INews> = (data) => {
        dispatch(addNews(sanitizeNews(data)))
            .unwrap()
            .then(res => {
                toast.success(res.message);
                reset();
            })
            .catch(errorNotify)
            .finally(() => dispatch(fetchLastNews(5)))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form w-full xl:w-[800px]">
            <InputField label="Title" type="text" name="title" required
                register={register} errors={errors} minLength={5}
            />
            <InputField label="Date" type="date" name="date" required
                register={register} errors={errors}
            />
            <TextareaField label="Content" name="content" required 
                register={register} errors={errors}
            />
            <Button isLoading={isLoading}>📑 Publish</Button>
        </form>
    )
}
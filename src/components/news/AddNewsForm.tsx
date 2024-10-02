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
import DOMPurify from "dompurify";

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
        dispatch(addNews({
            ...data,
            content: DOMPurify.sanitize(data.content as string)
        }))
            .then(() => dispatch(fetchLastNews({limit: 5})))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form w-full xl:w-[800px]">
            <InputField label="Title" type="text" name="title" required
                register={register} errors={errors}
            />
            <InputField label="Date" type="date" name="date" required
                register={register} errors={errors}
            />
            <TextareaField label="Content" name="content" register={register} />
            <Button text='📑 Publish' isLoading={isLoading} />
        </form>
    )
}
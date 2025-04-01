import { useSelector } from "react-redux";
import { selectCurrentNews, selectIsLoading } from "../../redux/news/selectors";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { fetchLastNews, updateNews } from "../../redux/news/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { INews } from "../../interfaces/interfaces";
import { InputField } from "../forms/InputField";
import { TextareaField } from "../forms/TextareaField";
import { Button } from "../Button";
import DOMPurify from "dompurify";

export const UpdateNewsForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<INews>();
    const currentNews = useSelector(selectCurrentNews);
    const isLoading = useSelector(selectIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        reset({
            title: currentNews?.title,
            date: currentNews?.date,
            url: currentNews?.url,
            content: currentNews?.content
        })
    }, [currentNews?.content, currentNews?.date, currentNews?.title, currentNews?.url, reset])

    const onSubmit: SubmitHandler<INews> = (data) => {
        if(currentNews){
            dispatch(updateNews({ id: currentNews._id as string, data: {
                ...data,
                content: DOMPurify.sanitize(data.content as string)
            }}))
                .then(() => dispatch(fetchLastNews(5)))
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <InputField label="Title" type="text" name="title" required
                register={register} errors={errors} minLength={5}
            />
            <InputField label="Date" type="date" name="date" required
                register={register} errors={errors}
            />
            <InputField label="Url" type="string" name="url" required
                register={register} errors={errors} minLength={5}
            />
            <TextareaField label="Content" name="content" register={register} />
            <Button text='📝 Update' isLoading={isLoading} />
        </form>
    )
}
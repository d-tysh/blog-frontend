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
import { toast } from "react-toastify";
import sanitizeNews from "../../utils/sanitizeData";
import errorNotify from "../../utils/errorNotify";
import { useNavigate } from "react-router-dom";

export const UpdateNewsForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<INews>();
    const currentNews = useSelector(selectCurrentNews);
    const isLoading = useSelector(selectIsLoading);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (currentNews) {
            reset({
                title: currentNews.title,
                date: currentNews.date,
                url: currentNews.url,
                content: currentNews.content
            })
        }
    }, [currentNews, reset])

    const onSubmit: SubmitHandler<INews> = (data) => {
        if(currentNews){
            dispatch(updateNews({ id: currentNews._id as string, data: sanitizeNews(data)}))
                .unwrap()
                .then(res => {
                    toast.success(res.message);
                    navigate(`/news/${res.result.url}`);
                })
                .catch(errorNotify)
                .finally(() => dispatch(fetchLastNews(5)))
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
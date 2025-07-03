import { SubmitHandler, useForm } from "react-hook-form";
import { TextareaField } from "../forms/TextareaField";
import { Button } from "../Button";
import { useSelector } from "react-redux";
import { selectNewsItem } from "../../redux/news/selectors";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { INewsCommentForm } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../hooks";
import { addComment, fetchNewsByURL } from "../../redux/news/actions";
import { toast } from "react-toastify";

export const AddCommentForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<INewsCommentForm>();
    const newsItem = useSelector(selectNewsItem);
    const currentUser = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<INewsCommentForm> = (data) => {
        if (currentUser && currentUser.id) {
            const commentData = {
                commentText: data.commentText,
                commentDate: new Date().toISOString().split('T')[0],
                authorName: currentUser.name,
                authorId: currentUser.id
            }
            dispatch(addComment({ newsId: newsItem?._id as string, data: commentData }))
                .unwrap()
                .then(() => {
                    toast.success('Comment added');
                    dispatch(fetchNewsByURL(newsItem?.url as string))
                    reset();
                })
                .catch(() => toast.error('Error adding comment'))
        }
    }

    return (
        <div className="my-8">
            {
                isLoggedIn
                    ?
                    <form onSubmit={handleSubmit(onSubmit)} className="form w-full xl:w-[800px]">
                        <TextareaField label='Comment' name='commentText' required
                            register={register} errors={errors} height={100}
                        />
                        <Button>Send comment</Button>
                    </form>
                    : 
                    <p className="text-center text-xl italic">Login to leave a comment</p>
            }
        </div>
    )
}
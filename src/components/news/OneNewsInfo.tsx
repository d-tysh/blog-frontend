import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { INews } from "../../interfaces/interfaces"
import { deleteNews, fetchLastNews, setCurrentNews } from "../../redux/news/actions";
import { getDate } from "../../utils/dateUtils"
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { Button } from "../Button";
import { toast } from "react-toastify";
import errorNotify from "../../utils/errorNotify";
import { AddCommentForm } from "./AddCommentForm";
import { CommentsList } from "./CommentsList";

export const OneNewsInfo = ({ newsItem }: { newsItem: INews }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onUpdate = () => {
        dispatch(setCurrentNews(newsItem));
        navigate(`/news/update/${newsItem?.url}`);
    }

    const onDelete = () => {
        if (newsItem) {
            dispatch(deleteNews(newsItem._id as string))
                .unwrap()
                .then(res => {
                    toast.info(res.message);
                    navigate('/news');
                })
                .catch(errorNotify)
                .finally(() => dispatch(fetchLastNews(5)))
        }
    }

    const btnDisabled = (user?.name !== newsItem?.author?.name) && (user?.role !== 'admin');

    return (
        <>
            <h2 className="text-center sm:text-left">{newsItem.title}</h2>
            {
                isLoggedIn &&
                <div className="flex justify-center sm:justify-end gap-2 mb-4">
                    <Button onClick={onUpdate} disabled={btnDisabled} width={120}>
                        ✏️ Edit
                    </Button>
                    <Button onClick={onDelete} disabled={btnDisabled} width={120}>
                        ❌ Delete
                    </Button>
                </div>
            }
            <p className="mb-2">✒️ Author: {newsItem.author?.name}</p>
            <p className="mb-2">🕒 Date: {newsItem.date && getDate(newsItem.date)}</p>
            <p dangerouslySetInnerHTML={{ __html: newsItem.content as string }} className="border min-h-80 p-2"></p>
            <AddCommentForm />
            <CommentsList comments={newsItem.comments} />
        </>
    )
}
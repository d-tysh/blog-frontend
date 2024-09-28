import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { INews } from "../../interfaces/interfaces"
import { deleteNews, fetchLastNews, setCurrentNews } from "../../redux/news/actions";
import { getDate } from "../../utils/dateUtils"
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { Button } from "../Button";

export const OneNewsInfo = ({ newsItem }: { newsItem: INews }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const { newsId } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onUpdate = () => {
        dispatch(setCurrentNews(newsItem));
        navigate(`/news/update/${newsItem?._id}`);
    }

    const onDelete = () => {
        if (newsId) {
            dispatch(deleteNews(newsId))
                .then(() => {
                    dispatch(fetchLastNews({ limit: 5 }));
                    navigate('/news');
                })
        }
    }

    const btnDisabled = (user?.name !== newsItem?.author?.name) && (user?.role !== 'admin');

    return (
        <>
            <h2>{newsItem.title}</h2>
            {
                isLoggedIn &&
                <div className="flex justify-end gap-2 mb-4">
                    <Button text="✏️ Edit" onClick={onUpdate} disabled={btnDisabled} width={120} />
                    <Button text="❌ Delete" onClick={onDelete} disabled={btnDisabled} width={120} />
                </div>
            }
            <i>✒️ Author: {newsItem.author?.name}</i>
            <br />
            <i>🕒 Date: {newsItem.date && getDate(newsItem.date)}</i>
            <p dangerouslySetInnerHTML={{ __html: newsItem.content as string }} className="border min-h-80 p-2"></p>
        </>
    )
}
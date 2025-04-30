import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { selectNewsItem } from "../../redux/news/selectors";
import { INewsComment } from "../../interfaces/interfaces";
import { Button } from "../Button";
import { useAppDispatch } from "../../hooks";
import { deleteComment, fetchNewsByURL } from "../../redux/news/actions";
import { toast } from "react-toastify";

export const CommentsListItem = ({ comment }: { comment: INewsComment }) => {
    const currentUser = useSelector(selectUser);
    const newsItem = useSelector(selectNewsItem);
    const dispatch = useAppDispatch();

    const onDelete = (commentId: string) => {
        if (newsItem && newsItem._id && newsItem.url) {
            const url = newsItem.url;
            const newsId = newsItem._id;
            dispatch(deleteComment({ newsId, commentId }))
                .unwrap()
                .then(() => {
                    toast.info('Comment deleted');
                    dispatch(fetchNewsByURL(url));
                })
                .catch(() => toast.error('Error: comment not deleted'));
        }
    }

    const isOwnComment = currentUser?.id === comment.authorId;

    return (
        <li className={`
                p-2 border-y-2 border-x-4 first:border-t-4 last:border-b-4
                ${isOwnComment && 'bg-orange-100'}
            `}
        >
            <div className="flex justify-between items-center gap-4">
                <p>
                    <span className="font-bold italic underline">{comment.authorName}:</span>
                    <br />
                    {comment.commentText}
                </p>
                {
                    (currentUser?.id === comment.authorId || currentUser?.role === 'admin')
                    &&
                    <Button text="❌" onClick={() => onDelete(comment._id)} />
                }
            </div>
        </li>
    )
}
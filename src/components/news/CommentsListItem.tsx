import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { INewsComment } from "../../interfaces/interfaces";

export const CommentsListItem = ({comment}: {comment: INewsComment}) => {
    const currentUser = useSelector(selectUser);

    return (
        <li className={`
                        ${currentUser?.id === comment.authorId && 'bg-orange-100'}
                        p-2 border-y-2 border-x-4 first:border-t-4 last:border-b-4
                    `}
        >
            <div className="flex justify-between items-center gap-4">
                <p>
                    <span className="font-bold italic underline">{comment.authorName}:</span>
                    <br/>
                    {comment.commentText}
                </p>
            </div>
        </li>
    )
}
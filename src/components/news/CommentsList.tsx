import { INewsComment } from "../../interfaces/interfaces"
import { CommentsListItem } from "./CommentsListItem"

export const CommentsList = ({comments}: {comments: INewsComment[]}) => { 
    return (
        comments.length 
        ? <ul>
            {comments.map(comment => 
                <CommentsListItem comment={comment} key={comment._id} />                
            )}
        </ul>
        : 'No comments for this news.'
    )
}
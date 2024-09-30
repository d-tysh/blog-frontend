import { NavLink } from "react-router-dom"
import { INews } from "../../interfaces/interfaces"
import { getDate } from "../../utils/dateUtils"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

export const NewsListItem = ({ item }: { item: INews }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <li key={item._id} className="news-list-item">
            {
                item._id && 
                <NavLink to={item._id}>
                    <h3 className="text-base font-bold">{item.title}</h3>
                </NavLink>
            }
            <p className="bg-slate-300 rounded-lg px-2 py-1 mr-auto">🕒 {item.date && getDate(item.date)}</p>
            { isLoggedIn && <i>✒️ {item.author?.name}</i> }
            <p dangerouslySetInnerHTML={{
                __html:
                    (item.content && item.content.length > 100 ? item.content.slice(0, 100) + '...' : item.content) as string
            }}></p>
        </li>
    )
}
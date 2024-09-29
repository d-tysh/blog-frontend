import { NavLink } from "react-router-dom"
import { INews } from "../../interfaces/interfaces"
import { getDate } from "../../utils/dateUtils"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

export const NewsListItem = ({ item }: { item: INews }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <li key={item._id} className="flex flex-col gap-3 p-4 bg-slate-200 w-full lg:w-[calc((100%-16px)/2)]">
            {
                item._id && 
                <NavLink to={item._id}>
                    <h3 className="text-base font-bold">{item.title}</h3>
                </NavLink>
            }
            <i className="bg-slate-300 rounded-lg px-2 py-1 mr-auto">🕒 {item.date && getDate(item.date)}</i>
            { isLoggedIn && <i>✒️ {item.author?.name}</i> }
            <p dangerouslySetInnerHTML={{
                __html:
                    (item.content && item.content.length > 100 ? item.content.slice(0, 100) + '...' : item.content) as string
            }}></p>
        </li>
    )
}
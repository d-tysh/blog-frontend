import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const HeaderNav = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className="flex gap-4 text-xl">
            <NavLink to="/">🏠︎ Home</NavLink>
            <NavLink to="/news">📰 News</NavLink>
            { isLoggedIn && <NavLink to="/add-news">📌 Add</NavLink> }
        </nav>
    )
}
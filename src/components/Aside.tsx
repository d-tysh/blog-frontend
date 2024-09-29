import { useSelector } from "react-redux";
import { AdminMenu } from "./widgets/AdminMenu"
import { NewsAside } from "./widgets/NewsAside"
import { selectIsFetchingCurrUser, selectIsLoading, selectIsLoggedIn, selectUser } from "../redux/auth/selectors";
import { NavLink, useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import { Button } from "./Button";
import { useAppDispatch } from "../hooks";
import { logout } from "../redux/auth/actions";


export const Aside = () => {
    const isFetchingCurrUser = useSelector(selectIsFetchingCurrUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
            .then(() => navigate('/login'))
    }

    return (
        <aside className="bg-gray-200 md:w-1/3 lg:w-1/4 p-8 flex flex-col gap-4">
            { (isFetchingCurrUser || isLoading) && <Loader size={30} /> }
            {
                !isLoading && isLoggedIn && user &&
                <div className="flex lg:hidden flex-col items-center gap-2 border border-gray-300 p-4">
                    <NavLink to={`/users/${user.id}`}>👋 Hello, {user.name}!</NavLink>
                    <Button text="🏁 Logout" width={120} isLoading={isLoading} onClick={handleLogout} />
                </div>
            }
            {
                !isLoggedIn && !user && !isFetchingCurrUser &&
                <div className="flex lg:hidden flex-col gap-2 border border-gray-300 p-4">
                    <NavLink to='/login'>🔑 Login</NavLink>
                    <NavLink to='/register'>📲 Register</NavLink>
                </div>
            }
            <AdminMenu />
            <NewsAside />
        </aside>
    )
}
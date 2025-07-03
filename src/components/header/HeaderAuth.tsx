import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { selectIsFetchingCurrUser, selectIsLoading, selectIsLoggedIn, selectUser } from "../../redux/auth/selectors"
import { useAppDispatch } from "../../hooks";
import { logout } from "../../redux/auth/actions";
import { Loader } from "../Loader";
import { Button } from "../Button";
import errorNotify from "../../utils/errorNotify";
import { userStatus } from "../../utils/userStatus";

export const HeaderAuth = () => {
    const isFetchingCurrUser = useSelector(selectIsFetchingCurrUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout())
            .unwrap()
            .then(() => navigate('/login'))
            .catch(errorNotify)
    }

    return (
        <>
            { isFetchingCurrUser && <Loader size={30} /> }
            {
                isLoggedIn && user && !isFetchingCurrUser &&
                <div className="hidden lg:flex items-center gap-3">
                    { userStatus(user.isOnline) }
                    <NavLink to={`/users/${user.id}`}>👋 Hello, {user.name}!</NavLink>
                    <Button width={120} isLoading={isLoading} onClick={handleLogout}>
                        🏁 Logout
                    </Button>
                </div>
            }
            {
                !isLoggedIn && !user && !isFetchingCurrUser &&
                <div className="hidden lg:flex gap-4 text-xl">
                    <NavLink to='/login'>🔑 Login</NavLink>
                    <NavLink to='/register'>📲 Register</NavLink>
                </div>
            }
        </>
    )
}
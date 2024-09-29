import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { selectIsFetchingCurrUser, selectIsLoading, selectIsLoggedIn, selectUser } from "../../redux/auth/selectors"
import { useAppDispatch } from "../../hooks";
import { logout } from "../../redux/auth/actions";
import { Loader } from "../Loader";
import { Button } from "../Button";

export const HeaderAuth = () => {
    const isFetchingCurrUser = useSelector(selectIsFetchingCurrUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout())
            .then(() => navigate('/login'))
    }

    return (
        <>
            { isFetchingCurrUser && <Loader size={30} /> }
            {
                isLoggedIn && user && !isFetchingCurrUser &&
                <div className="flex items-center gap-3">
                    <NavLink to={`/users/${user.id}`}>👋 Hello, {user.name}!</NavLink>
                    <Button text="🏁 Logout" width={120} isLoading={!isLoading} onClick={handleLogout} />
                </div>
            }
            {
                !isLoggedIn && !user && !isFetchingCurrUser &&
                <div className="flex gap-4 text-xl">
                    <NavLink to='/login'>🔑 Login</NavLink>
                    <NavLink to='/register'>📲 Register</NavLink>
                </div>
            }
        </>
    )
}
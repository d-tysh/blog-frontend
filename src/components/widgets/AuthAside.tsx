import { useSelector } from "react-redux";
import { selectIsFetchingCurrUser, selectIsLoading, selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../hooks";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/actions";
import { Loader } from "../Loader";
import { Button } from "../Button";
import classNames from "classnames";


export const AuthAside = () => {
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
        <div className={classNames(
            "aside-item flex flex-col gap-2 lg:hidden",
            { "items-center": isLoggedIn }
        )}>
            {(isLoading || isFetchingCurrUser) && <Loader size={30} />}
            {
                !isLoading && isLoggedIn && user &&
                <>
                    <NavLink to={`/users/${user.id}`}>👋 Hello, {user.name}!</NavLink>
                    <Button width={120} isLoading={isLoading} onClick={handleLogout}>
                        🏁 Logout
                    </Button>
                </>
            }
            {
                !isLoading && !isLoggedIn && !user && !isFetchingCurrUser &&
                <>
                    <NavLink to='/login'>🔑 Login</NavLink>
                    <NavLink to='/register'>📲 Register</NavLink>
                </>
            }
        </div>
    )
}
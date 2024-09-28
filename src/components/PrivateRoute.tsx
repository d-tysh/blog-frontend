import { useSelector } from "react-redux"
import { selectIsFetchingCurrUser, selectIsLoggedIn } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo }: {component: React.ReactElement, redirectTo: string}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isFetchingCurrUser = useSelector(selectIsFetchingCurrUser);
    const shouldRedirect = !isLoggedIn && !isFetchingCurrUser;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
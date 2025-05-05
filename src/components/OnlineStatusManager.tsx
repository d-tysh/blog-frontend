import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { useAppDispatch } from "../hooks";
import { fetchCurrentUser } from "../redux/auth/actions";

const { VITE_API_URL } = import.meta.env;

const handleOnlineStatus = (id: string, status: true | false) => {
    const data = JSON.stringify({ id, isOnline: status })
    navigator.sendBeacon(`${VITE_API_URL}/users/status`, data);
}

export const OnlineStatusManager = () => {
    const currentUser = useSelector(selectUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!currentUser || !currentUser.id) return;

        const id = currentUser.id;

        if (currentUser && id && !currentUser.isOnline) {
            handleOnlineStatus(id, true);
            dispatch(fetchCurrentUser());
        }

        const handleUnload = () => handleOnlineStatus(id, false);

        window.addEventListener('beforeunload', handleUnload);
        
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        }
    }, [dispatch, currentUser])

    return null;
}
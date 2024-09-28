import { useSelector } from "react-redux"
import { RegisterForm } from "../components/auth/RegisterForm"
import { selectUser } from "../redux/auth/selectors"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AddUserPage = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.role !== 'admin') {
            navigate('/');
        }
    }, [navigate, user])

    return (
        <>
            <h2 className="text-center">Add new user</h2>
            <RegisterForm />
        </>
    )
}
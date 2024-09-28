import { useSelector } from "react-redux";
import { AllUsersInfo } from "../components/users/AllUsersInfo";
import { selectUser } from "../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AllUsersPage = () => {    
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.role !== 'admin') {
            navigate('/');
        }
    }, [navigate, user])

    return (
        <div>
            <h2 className="text-center">Users</h2>
            <AllUsersInfo />
        </div>
    )
}

export default AllUsersPage;
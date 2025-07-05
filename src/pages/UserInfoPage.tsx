import { Helmet } from "react-helmet"
import { UserInfo } from "../components/users/UserInfo"

export const UserInfoPage = () => {
    return (
        <>
            <Helmet>
                <title>User information</title>
            </Helmet>
            <h2 className="text-center">User info</h2>
            <UserInfo />
        </>
    )
}
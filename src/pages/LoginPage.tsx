import { Helmet } from "react-helmet";
import { LoginForm } from "../components/auth/LoginForm"

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>BLOG - Login page</title>
            </Helmet>
            <h2 className="text-center">Login</h2>
            <LoginForm />
        </>
    )
}

export default LoginPage;
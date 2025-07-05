import { Helmet } from "react-helmet";
import { RegisterForm } from "../components/auth/RegisterForm"

const RegisterPage = () => {
    return (
        <>
            <Helmet>
                <title>BLOG - Register page</title>
            </Helmet>
            <h2 className="text-center">Register</h2>
            <RegisterForm />
        </>
    )
}

export default RegisterPage;
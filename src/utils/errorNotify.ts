import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface IErrorResponse {
    message?: string,
    [key: string]: unknown
}

const errorNotify = (
    error: AxiosError<IErrorResponse>, 
    defaultMessage = 'Error: something went wrong...'
) => {
    const message = error.response?.data?.message || defaultMessage;
    toast.error(message);
}

export default errorNotify;
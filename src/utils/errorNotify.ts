import { isAxiosError } from "axios";
import { toast } from "react-toastify";

interface IErrorResponse {
    message?: string,
    [key: string]: unknown
}

const errorNotify = (
    error: unknown,
    defaultMessage = 'Error: something went wrong...'
) => {
    if (isAxiosError<IErrorResponse>(error)) {
        const message = error.response?.data?.message || error.message || defaultMessage;
        toast.error(message);
    } else if (error instanceof Error) {
        toast.error(error.message || defaultMessage);
    } else {
        toast.error(defaultMessage);
    }
}

export default errorNotify;
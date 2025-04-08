import DOMPurify from "dompurify";
import { INews } from "../interfaces/interfaces";

const sanitizeNews = (data: INews) => {
    return {
        ...data,
        title: DOMPurify.sanitize(data.title as string),
        content: DOMPurify.sanitize(data.content as string)
    }
}

export default sanitizeNews;
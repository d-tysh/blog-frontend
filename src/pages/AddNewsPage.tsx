import { Helmet } from "react-helmet";
import { AddNewsForm } from "../components/news/AddNewsForm"

const AddNewsPage = () => {
    return (
        <>
            <Helmet>
                <title>BLOG - Add new post</title>
            </Helmet>
            <h2 className="text-center">Add News</h2>
            <AddNewsForm />
        </>
    )
}

export default AddNewsPage;
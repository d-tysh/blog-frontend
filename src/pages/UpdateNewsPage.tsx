import { useSelector } from "react-redux";
import { selectCurrentNews } from "../redux/news/selectors";
import { useNavigate } from "react-router-dom";
import { UpdateNewsForm } from "../components/news/UpdateNewsForm";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet";

const UpdateNewsPage = () => {
    const currentNews = useSelector(selectCurrentNews);
    const navigate = useNavigate();

    return (
        <div className='mx-auto w-full xl:w-[800px]'>
            <Helmet>
                <title>Update post "{currentNews?.title}"</title>
            </Helmet>
            <h2 className="text-center">Update news: <i>{currentNews?.title}</i></h2>
            <div className="flex justify-center sm:justify-end mb-4">
                <Button type='button' onClick={() => navigate(`/news/${currentNews?.url}`)}>
                    ✖️ Close editor
                </Button>
            </div>
            <UpdateNewsForm />
        </div>
    )
}

export default UpdateNewsPage;
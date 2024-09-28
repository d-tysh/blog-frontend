import { useSelector } from "react-redux";
import { selectCurrentNews } from "../redux/news/selectors";
import { useNavigate } from "react-router-dom";
import { UpdateNewsForm } from "../components/news/UpdateNewsForm";
import { Button } from "../components/Button";

const UpdateNewsPage = () => {
    const currentNews = useSelector(selectCurrentNews);
    const navigate = useNavigate();

    return (
        <div className='w-[800px] mx-auto'>
            <h2>Update news: <i>{currentNews?.title}</i></h2>
            <div className="flex justify-end mb-4">
                <Button text="✖️ Close editor" type='button' onClick={() => navigate(`/news/${currentNews?._id}`)} />
            </div>
            <UpdateNewsForm />
        </div>
    )
}

export default UpdateNewsPage;
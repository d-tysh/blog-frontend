import { useSelector } from "react-redux"
import { selectError, selectIsLoading, selectLastNews } from "../../redux/news/selectors"
import { Loader } from "../Loader";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { fetchLastNews } from "../../redux/news/actions";
import { Error } from "../Error";

export const NewsAside = () => {
    const lastNews = useSelector(selectLastNews);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLastNews(5))
    }, [dispatch])

    return (
        <div className="aside-item">
            <h4>Last News:</h4>
            <ul className="list-disc ml-4">
                { isLoading && <Loader /> }
                {
                    !isLoading && !error && lastNews && lastNews.map(item => <li key={item._id}>
                        <NavLink to={`/news/${item._id}`} className='text-sm'>{item.title}</NavLink>
                    </li>)
                }
                { !isLoading && error && <Error width={150} /> }
            </ul>
        </div>
    )
}
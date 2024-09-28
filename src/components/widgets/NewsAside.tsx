import { useSelector } from "react-redux"
import { selectIsLoading, selectLastNews } from "../../redux/news/selectors"
import { Loader } from "../Loader";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { fetchLastNews } from "../../redux/news/actions";

export const NewsAside = () => {
    const lastNews = useSelector(selectLastNews);
    const isLoading = useSelector(selectIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLastNews({limit: 5}))
    }, [dispatch])

    return (
        <div className="border border-slate-300 px-4 py-2">
            <h4>Last News:</h4>
            <ul className="list-disc ml-4">
                { isLoading && !lastNews.length && <Loader /> }
                {
                    lastNews && lastNews.map(item => <li key={item._id}>
                        <NavLink to={`/news/${item._id}`} className='text-sm'>{item.title}</NavLink>
                    </li>)
                }
            </ul>
        </div>
    )
}
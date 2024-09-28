import { useSelector } from "react-redux";
import { NewsListItem } from "./NewsListItem";
import { selectError, selectIsLoading, selectNewsList } from "../../redux/news/selectors";
import { useAppDispatch } from "../../hooks";
import { SyntheticEvent, useEffect } from "react";
import { fetchNews } from "../../redux/news/actions";
import { Loader } from "../Loader";
import { Pagination } from "../Pagination";

export const NewsList = () => {
    const newsList = useSelector(selectNewsList);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const limit = 4;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews({ page: 1, limit }));
    }, [dispatch])

    const loadNews = async (e: SyntheticEvent<HTMLButtonElement>, page: number) => {
        e.preventDefault();
        dispatch(fetchNews({ page, limit }));
    }

    return (
        <>
            <div className="flex flex-col justify-center min-h-[60vh]">
                {isLoading && !error && <Loader size={40} />}
                {!isLoading && !error && newsList &&
                    <ul className="flex justify-center gap-4 flex-wrap">
                        { newsList.map((item) => <NewsListItem item={item} key={item._id} />) }
                    </ul>
                }
            </div>
            <Pagination limit={limit} clickHandler={loadNews} />
        </>
    )
}
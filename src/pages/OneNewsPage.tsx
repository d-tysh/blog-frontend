import { useSelector } from "react-redux"
import { selectError, selectIsLoading, selectNewsItem } from "../redux/news/selectors"
import { useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { fetchNewsById } from "../redux/news/actions";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { OneNewsInfo } from "../components/news/OneNewsInfo";
import PageNotFound from "./PageNotFound";

const OneNewsPage = () => {
    const newsItem = useSelector(selectNewsItem);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const { newsId } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (newsId) dispatch(fetchNewsById(newsId));
    }, [dispatch, newsId])

    return (
        <>
            { isLoading && !error && <Loader size={40} /> }
            { !isLoading && !error && newsItem && <OneNewsInfo newsItem={newsItem} /> }
            { !isLoading && error && !newsItem && <PageNotFound /> }
        </>
    )
}

export default OneNewsPage;
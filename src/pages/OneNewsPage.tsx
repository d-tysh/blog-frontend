import { useSelector } from "react-redux"
import { selectError, selectIsLoading, selectNewsItem } from "../redux/news/selectors"
import { useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { fetchNewsByURL } from "../redux/news/actions";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { OneNewsInfo } from "../components/news/OneNewsInfo";
import PageNotFound from "./PageNotFound";
import { Helmet } from "react-helmet";
import { getMetaDescription } from "../utils/getMetaDescription";

const OneNewsPage = () => {
    const newsItem = useSelector(selectNewsItem);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const { newsUrl } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (newsUrl) dispatch(fetchNewsByURL(newsUrl));
    }, [dispatch, newsUrl])

    return (
        <>
            { isLoading && !error && <Loader size={40} /> }
            { !isLoading && !error && newsItem && 
                <>
                    <Helmet>
                        <title>{newsItem.title}</title>
                        <meta 
                            name="description"
                            content={newsItem.content && getMetaDescription(newsItem.content, 157) + '...'} 
                        />
                    </Helmet>
                    <OneNewsInfo newsItem={newsItem} />
                </> 
            }
            { !isLoading && error && !newsItem && <PageNotFound /> }
        </>
    )
}

export default OneNewsPage;
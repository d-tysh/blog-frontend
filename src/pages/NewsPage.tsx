import { Helmet } from "react-helmet";
import { NewsList } from "../components/news/NewsList";

const NewsPage = () => {
    return (
        <>
            <Helmet>
                <title>BLOG - News page</title>
            </Helmet>
            <h2 className="text-center">News</h2>
            <NewsList />
        </>
    )
}

export default NewsPage;
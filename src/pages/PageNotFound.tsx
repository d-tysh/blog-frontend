import { Helmet } from "react-helmet";

const PageNotFound = () => {
    return (
        <div className="flex items-center flex-col">
            <Helmet>
                <title>BLOG - Page Not Found</title>
            </Helmet>
            <h2 className="text-center">Page not found</h2>
            <img src="/error-404.avif" alt="Error 404: Page not found" className="rounded-[10%]" width={400} />
        </div>
    )
}

export default PageNotFound;
import { NewsSlider } from "../components/news/NewsSlider";

const HomePage = () => {
    return (
        <div className="text-center">
            <h2>Wellcome to Blog!</h2>
            <p className="mb-4">We will talk to you about football news and you can learn interesting information about the most popular game in the world.</p>
            <NewsSlider />
        </div>
    )
}

export default HomePage;
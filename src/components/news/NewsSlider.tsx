import { useSelector } from "react-redux";
import { selectError, selectIsLoading, selectLastNews } from "../../redux/news/selectors";
import { Slider } from "../Slider";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { Loader } from "../Loader";
import { Error } from "../Error";

export const NewsSlider = () => {
    const lastNews = useSelector(selectLastNews);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return (
        <>
            {isLoading && !error && !lastNews.length && <Loader />}
            {
                !isLoading && lastNews.length > 0 &&
                <Slider>
                    {
                        lastNews.map(item => <SwiperSlide key={item._id}>
                            <div className="flex justify-center h-[300px] sm:px-16">
                                <NavLink
                                    to={`/news/${item.url}`}
                                    className='flex justify-center items-center bg-lime-200 w-full h-full p-4 sm:p-8'
                                >{item.title}</NavLink>
                            </div>
                        </SwiperSlide>)
                    }
                </Slider>
            }
            { error && !isLoading && !lastNews.length && <Error /> }
        </>
    );
};

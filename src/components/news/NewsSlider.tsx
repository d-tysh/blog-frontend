import { useSelector } from "react-redux";
import { selectLastNews } from "../../redux/news/selectors";
import { Slider } from "../Slider";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

export const NewsSlider = () => {
    const lastNews = useSelector(selectLastNews);

    return (
        <Slider>
            {
                lastNews && lastNews.map(item => <SwiperSlide key={item._id}>
                    <div className="flex justify-center h-[300px] px-16">
                        <NavLink
                            to={`/news/${item._id}`}
                            className='flex justify-center items-center bg-lime-200 w-full h-full p-8'
                        >{item.title}</NavLink>
                    </div>
                </SwiperSlide>)
            }
        </Slider>
    );
};

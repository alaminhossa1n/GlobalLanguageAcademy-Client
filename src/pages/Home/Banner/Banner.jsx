
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
const Banner = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src="https://i.ibb.co/W0J61St/sincerely-media-vc-F5y2-Edm6-A-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/CsqXkrN/element5-digital-Oy-Cl7-Y4y0-Bk-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/5s0bGcJ/tim-mossholder-WE-Kv-ZB1l0-unsplash.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
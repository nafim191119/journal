// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="https://i.ibb.co/f2v7NxL/slide1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/VV5ssrz/slide2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/bX9JdpZ/Slide3.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
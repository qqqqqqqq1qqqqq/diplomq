import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';

const Carousel = ({ slides, height, width, delay, isPagintaion = true }) => {
  return (
    <div>
      <Swiper
        style={{ height: height, maxWidth: width }}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true, enabled: isPagintaion }}
        autoplay={{ delay: delay, disableOnInteraction: false }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.title}>
            <img
              src={slide.image}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

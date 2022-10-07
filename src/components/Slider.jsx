import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imageOne from '../images/four.jpg';
import imageTwo from '../images/two.jpg';

const Slider = () => {

    const style = {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
    }

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={1}
    onNavigationNext={true}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img style={style} src={imageOne} alt='Slider Image One'/>
      </SwiperSlide>
      <SwiperSlide>
        <img style={style} src={imageTwo} alt='Slider Image One' />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
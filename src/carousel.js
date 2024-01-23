
import Pic1 from './photos/MoneyTree.webp';
import Pic2 from './photos/DracaenaLemonLime.webp';
import Pic3 from './photos/AglaonemaWishes.webp';
import Pic4 from './photos/rubbertree.webp';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HomeCarousel = () => {
    const pics = [
      { title: 'Money Tree', src: Pic1 },
      { title: 'Dracaena Lemon Lime',  src: Pic2 },
      { title: 'Aglonema Wishes',  src: Pic3 },
      { title: 'Rubber Tree', src: Pic4 },
    ];
  
    return (
        <div className="music-carousel-container"> {/* Container for the entire MusicCarousel component */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {pics.map((pic, index) => (
              <SwiperSlide key={index}>
                <img src={pic.src} alt={pic.title} />
                <div className="carousel-title">{pic.title}</div>
                <div className="carousel-artist">{pic.artist}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    };
    
    export default HomeCarousel;
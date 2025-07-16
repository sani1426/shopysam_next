
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




// import required modules
import { EffectCreative , Navigation, Pagination , Autoplay } from 'swiper/modules';
import { Carousel_items } from '@/constance';


const ShopCarousel = () => {
  return (
    <div className=' w-full px-4 overflow-hidden rounded-xl lg:grid lg:grid-cols-[minmax(70%,30%)30%] lg:gap-4'>
      <div>
      <div className='h-[25rem] rounded-xl '>
            <Swiper
        
            loop={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}

        modules={[EffectCreative,Navigation, Pagination,Autoplay ]}
        autoplay={{
          delay : 5000 ,
          disableOnInteraction : false
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper w-full h-full rounded-xl"
      >
        {
          Carousel_items.map(item => (
            <SwiperSlide className='min-h-full rounded-xl' key={item.id}>
              <img src={item.src} alt="" className='min-h-full rounded-xl object-center' />
              </SwiperSlide>
          ))
        }
     

      </Swiper>
      </div>
      </div>

      <div className='hidden lg:grid lg:grid-rows-2 gap-4 h-[25rem]'>
        <img src="/images/banners/ban_1.jpg" className='  w-full h-[12rem] rounded-xl' alt="" />
        <img src="/images/banners/ban_2.jpg" className='w-full h-[12rem] object-cover rounded-xl' alt="" />
      </div>
    </div>
  )
}

export default ShopCarousel

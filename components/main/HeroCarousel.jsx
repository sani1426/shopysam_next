'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  EffectCreative,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper/modules'
import { Carousel_items } from '@/constance'

const HeroCarousel = () => {
  return (
    <div className=' w-full px-4 lg:px-8 overflow-hidden rounded-xl'>
      <div>
        <div className='h-[20rem] rounded-xl '>
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
            modules={[EffectCreative, Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            className='mySwiper w-full h-full rounded-xl'
          >
            {Carousel_items.map((item) => (
              <SwiperSlide className='min-h-full rounded-xl' key={item.id}>
                <img
                  src={item.src}
                  alt=''
                  className='min-h-full rounded-xl object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel

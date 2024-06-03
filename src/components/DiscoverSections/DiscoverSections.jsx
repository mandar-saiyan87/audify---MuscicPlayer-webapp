import React from 'react'
import {
  DiscoverSectionMain,
  SectionHeader,
  Slide,
} from './discoversections.styles'
import { useGetCategoriesQuery } from '../../store/services/songsApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';


function DiscoverSections() {

  const { data, error, isLoading } = useGetCategoriesQuery()


  return (
    <DiscoverSectionMain>
      <SectionHeader>
        <p className='section_title'>Discover</p>
        <p className='section_showall'>Show All</p>
      </SectionHeader>
      {/* <Slider >
        {data?.categoryList.map((category) => (
          <Slide key={category.categoryid} color={category.color}>{category.name}</Slide>
        ))}
      </Slider> */}
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode
        modules={[FreeMode]}
        className='swiper_main'
        breakpoints={{
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 30
          },
          575: {
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 30
          }
        }}
      >
        {data?.categoryList.map((category) => (
          <SwiperSlide
            key={category.categoryid}
          >
            <Slide color={category.color}>{category.name}</Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </DiscoverSectionMain>
  )
}

export default DiscoverSections

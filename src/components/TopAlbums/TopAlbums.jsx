import React from 'react'
import { TopAlbumsMain, SectionHeader } from './topalbums.styles'
import { useGetAlbumsQuery } from '../../store/services/songsApi'
import AlbumCard from '../AlbumCard/AlbumCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';



function TopAlbums() {

  const { data, error, isLoading } = useGetAlbumsQuery()

  return (
    <TopAlbumsMain>
      <SectionHeader>
        <p className='section_title'>Top Albums</p>
        <p className='section_showall'>Show All</p>
      </SectionHeader>
      <Swiper
        slidesPerView={6}
        spaceBetween={15}
        freeMode
        modules={[FreeMode]}
        className='swiper_main'
        breakpoints={{
          1200: {
            slidesPerView: 5,
            spaceBetween: 15
          },

          1024: {
            slidesPerView: 3.5,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          575: {
            slidesPerView: 2.5,
            spaceBetween: 15
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 15
          }
        }}
      >
        {data?.albumsList.slice(0, 5).map((album) => (
          <SwiperSlide key={album.albumid}>
            <AlbumCard carddetails={album} />
          </SwiperSlide>
        ))}
      </Swiper>

    </TopAlbumsMain>

  )
}

export default TopAlbums
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useGetArtistsQuery } from '../../store/services/songsApi';
import { TopArtistsMain, SectionHeader } from './topartists.styles';
import ArtistsCard from './ArtistsCard';

function TopArtists() {

  const { data, error, isLoading } = useGetArtistsQuery()

  return (
    <TopArtistsMain>
      <SectionHeader>
        <p className='section_title'>Popular Artists</p>
        <p className='section_showall'>Show All</p>
      </SectionHeader>
      <Swiper
        slidesPerView={7}
        spaceBetween={60}
        freeMode
        modules={[FreeMode]}
        className='swiper_main'
        breakpoints={{
          1200: {
            slidesPerView: 6,
            spaceBetween: 60
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 50
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 50
          }
        }}
      >
        {data?.artistsList.slice(0, 6).map((artist) => (
          <SwiperSlide key={artist.artistid}>
            <ArtistsCard carddetails={artist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </TopArtistsMain>
  )
}

export default TopArtists

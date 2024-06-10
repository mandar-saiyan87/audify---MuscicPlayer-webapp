import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useGetArtistsQuery } from '../../store/services/songsApi';
import { TopArtistsMain, SectionHeader } from './topartists.styles';
import ArtistsCard from './ArtistsCard';
import { setArtists } from '../../store/dataSlice';

function TopArtists() {

  const { data, error, isLoading } = useGetArtistsQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setArtists(data?.artistsList))
  })

  return (
    <TopArtistsMain>
      <SectionHeader>
        <p className='section_title'>Popular Artists</p>
        <Link to='/home/artists'>
          <p className='section_showall'>Show All</p>
        </Link>
      </SectionHeader>
      <Swiper
        slidesPerView={7}
        spaceBetween={6}
        freeMode
        modules={[FreeMode]}
        className='swiper_main'
        breakpoints={{
          1200: {
            slidesPerView: 6,
            spaceBetween: 6
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 6
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 6
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 6
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 6
          }
        }}
      >
        {data?.artistsList.slice(0, 6).map((artist) => (
          <SwiperSlide key={artist.artistid} style={{ maxWidth: '180px' }}>
            <ArtistsCard carddetails={artist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </TopArtistsMain>
  )
}

export default TopArtists

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TopTracksMain, SectionHeader } from './toptracks.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useGetsongsQuery } from '../../store/services/songsApi';
import { useDispatch } from 'react-redux';
import { setTracks } from '../../store/dataSlice';
import TopTracksCard from '../TopTracksCard/TopTracks';

function TopTracks() {

  const { data, error, isLoading } = useGetsongsQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTracks(data?.trackList))
  }, [data, dispatch])

  return (
    <TopTracksMain>
      <SectionHeader>
        <p className='section_title'>Top Tracks</p>
        <Link to='/home/tracks'>
          <p className='section_showall'>Show All</p>
        </Link>
      </SectionHeader>
      <Swiper
        slidesPerView={6}
        spaceBetween={6}
        freeMode
        modules={[FreeMode]}
        className='swiper_main'
        breakpoints={{
          1200: {
            slidesPerView: 4.5,
            spaceBetween: 6
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 6
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          575: {
            slidesPerView: 2.5,
            spaceBetween: 6
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 6
          }
        }}
      >
        {data?.trackList.slice(0, 5).map((track) => (
          <SwiperSlide key={track.songid} style={{ maxWidth: '250px' }}>
            <TopTracksCard carddetails={track} />
          </SwiperSlide>
        ))}
      </Swiper>
    </TopTracksMain>
  )
}

export default TopTracks
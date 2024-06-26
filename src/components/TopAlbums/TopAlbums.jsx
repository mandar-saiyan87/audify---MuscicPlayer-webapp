import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TopAlbumsMain, SectionHeader } from './topalbums.styles'
import { useGetAlbumsQuery } from '../../store/services/songsApi'
import AlbumCard from '../AlbumCard/AlbumCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useDispatch } from 'react-redux';
import { setAlbums } from '../../store/dataSlice';



function TopAlbums() {

  const { data, error, isLoading } = useGetAlbumsQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAlbums(data?.albumsList))
  }, [data, dispatch])

  return (
    <TopAlbumsMain>
      <SectionHeader>
        <p className='section_title'>Top Albums</p>
        <Link to='/home/albums'>
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
        {data?.albumsList.slice(0, 5).map((album) => (
          <SwiperSlide key={album.albumid} style={{ maxWidth: '250px' }}>
            <AlbumCard carddetails={album} />
          </SwiperSlide>
        ))}
      </Swiper>

    </TopAlbumsMain>

  )
}

export default TopAlbums
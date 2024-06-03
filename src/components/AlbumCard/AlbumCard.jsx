import React from 'react'
import { AlbumCardMain, AlbumDetails, AlbumOverlay, ImgDiv } from './albumcard.styles'
import { FaPlay } from "react-icons/fa6";

function AlbumCard({ carddetails }) {
  return (
    <AlbumCardMain>
      <AlbumOverlay>
        <button className='play_button'>
          <FaPlay color='black' size={20} />
        </button>

      </AlbumOverlay>
      <AlbumDetails>
        <ImgDiv>
          <img src={carddetails.imageurl} alt="albumimage" className='album_image' />
        </ImgDiv>
        <p className='album_title'>{carddetails.title}</p>
        <p className='album_artist'>{carddetails.artistname}</p>
      </AlbumDetails>
    </AlbumCardMain>
  )
}

export default AlbumCard

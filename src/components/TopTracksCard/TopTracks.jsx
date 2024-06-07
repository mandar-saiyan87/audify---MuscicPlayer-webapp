import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TopTracksCardMain, TrackDetails, Overlay, ImgDiv } from './albumcard.styles'
import { FaPlay } from "react-icons/fa6";

function AlbumCard({ carddetails }) {

  const navigate = useNavigate()

  function navigateTo() {
    navigate(
      `/home/albums/${carddetails.albumid}`,
      { state: carddetails }
    )
  }

  return (
    <TopTracksCardMain onClick={navigateTo}>
      <Overlay>
        <button className='play_button'>
          <FaPlay color='black' size={20} />
        </button>

      </Overlay>
      <TrackDetails>
        <ImgDiv>
          <img src={carddetails.imageurl} alt="albumimage" className='album_image' />
        </ImgDiv>
        <p className='album_title'>{carddetails.title}</p>
        <p className='album_artist'>{carddetails.artistname}</p>
      </TrackDetails>
    </TopTracksCardMain>
  )
}

export default AlbumCard

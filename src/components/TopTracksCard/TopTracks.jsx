import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TopTracksCardMain, TrackDetails, Overlay, ImgDiv } from './toptracks.styles'
import { FaPlay } from "react-icons/fa6";
import { setcurrentPlaylist } from '../../store/dataSlice';

function TopTracksCard({ carddetails }) {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [hoverState, setHoverState] = useState()

  function navigateTo() {
    navigate(
      `/home/albums/${carddetails.albumid}`,
      { state: carddetails }
    )
  }

  function handleCardClick() { }

  function handlePlayClick(e) {
    e.stopPropagation()
    dispatch(setcurrentPlaylist([carddetails]))
  }


  return (
    <TopTracksCardMain
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Overlay Hover={hoverState}>
        <button className='play_button' onClick={handlePlayClick}>
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

export default TopTracksCard

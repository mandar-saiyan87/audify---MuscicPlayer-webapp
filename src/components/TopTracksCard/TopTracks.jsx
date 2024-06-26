import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  TopTracksCardMain,
  TrackDetails,
  Overlay,
  ImgDiv,
  ButtonsDiv
} from './toptracks.styles'
import { FaPlay } from "react-icons/fa6";
import { setcurrentPlaylist } from '../../store/dataSlice';
import { IoIosAddCircleOutline } from "react-icons/io";
import Addtoplaylist from '../Modal/Addtoplaylist';

function TopTracksCard({ carddetails }) {

  const isLoggedIn = useSelector((state) => state.user.loggedinUser)
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedTrack, setSelectedTrack] = useState(null);

  const [hoverState, setHoverState] = useState()

  function handlePlayClick(e) {
    e.stopPropagation()
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      dispatch(setcurrentPlaylist([carddetails]))
    }
  }

  function handleAddClick() {
    setSelectedTrack(carddetails.songid)
    setModal(true)
  }

  

  return (
    <>
      <Addtoplaylist isopen={modal} setState={setModal} trackid={selectedTrack} />
    <TopTracksCardMain
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Overlay Hover={hoverState}>
        <ButtonsDiv>
            <IoIosAddCircleOutline size={25} color='white' style={{ cursor: 'pointer' }} onClick={handleAddClick}/>
          <button className='play_button' onClick={handlePlayClick}>
            <FaPlay color='black' size={20} />
          </button>
        </ButtonsDiv>
      </Overlay>
      <TrackDetails>
        <ImgDiv>
          <img src={carddetails.imageurl} alt="albumimage" className='album_image' />
        </ImgDiv>
        <p className='album_title'>{carddetails.title}</p>
        <p className='album_artist'>{carddetails.artistname}</p>
      </TrackDetails>
    </TopTracksCardMain>
    </>
  )
}

export default TopTracksCard

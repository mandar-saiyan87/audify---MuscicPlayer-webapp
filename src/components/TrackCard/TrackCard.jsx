import React, { useState } from 'react'
import {
  TrackCardMain,
  TrackDetails,
  Trackid,
  Trackinfo,
  Trackruntime,
  TrackImage,
  TrackDetailtext
} from './trackcard.styles'
import { FaPlay } from "react-icons/fa6";
import { setCurrentTrackIndex } from '../../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import useMediaQuery from '@mui/material/useMediaQuery';

function TrackCard({ track, index, setPlaylist, theme }) {

  const mobileDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const isLoggedIn = useSelector((state) => state.user.loggedinUser)

  const [hoverState, setHoverState] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const Duration = (duration) => {
    return duration.substring(0, 5); // Extracts the first 5 characters (MM:SS)
  };

  function handleClick() {
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      setPlaylist()
      dispatch(setCurrentTrackIndex(index))
    }
  }

  return (
    <TrackCardMain
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      hoverstate={hoverState}
      onClick={handleClick}>
      <TrackDetails>
        {!mobileDevice &&
          <Trackid>
            {hoverState ? <FaPlay /> : <p>{index + 1}</p>}
          </Trackid>
        }
        <Trackinfo>
          <TrackImage>
            <img src={track.imageurl} alt="track_image" className='track_card_img' />
          </TrackImage>
          <TrackDetailtext>
            <p className='track_title'>{track.title}</p>
            <p className='track_artist'>{track.artistname}</p>
          </TrackDetailtext>
        </Trackinfo>
      </TrackDetails>
      <IoIosAddCircleOutline size={24} style={{ cursor: 'pointer' }} />
      <Trackruntime>
        <p>{Duration(track.duration)}</p>
      </Trackruntime>
    </TrackCardMain>
  )
}

export default TrackCard
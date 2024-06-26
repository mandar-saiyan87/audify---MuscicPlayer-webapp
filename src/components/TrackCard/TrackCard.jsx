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
import { FaCheckCircle } from "react-icons/fa";
import { setCurrentTrackIndex } from '../../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import useMediaQuery from '@mui/material/useMediaQuery';
import Addtoplaylist from '../Modal/Addtoplaylist';
import { deletetrackfromplaylistApi } from '../../store/userPlaylistSlice';
import Cookies from 'js-cookie'


function TrackCard({ track, index, setPlaylist, theme, playlistid }) {

  const mobileDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
  const token = useSelector((state) => state.user.token) || Cookies.get('token')

  const [modal, setModal] = useState(false)
  const [selectedTrack, setSelectedTrack] = useState(null);

  const isLoggedIn = useSelector((state) => state.user.loggedinUser)
  const playlistTracks = useSelector((state) => state.playlist.playlistData)

  // console.log(playlistTracks)

  const [hoverState, setHoverState] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const Duration = (duration) => {
    return duration?.substring(0, 5); // Extracts the first 5 characters (MM:SS)
  };

  function handleClick() {
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      setPlaylist()
      dispatch(setCurrentTrackIndex(index))
    }
  }

  function handleAddClick(e, id) {
    e.stopPropagation()
    setSelectedTrack(id)
    setModal(true)
  }
  function handleRemovefromplaylist(e, songid) {
    e.stopPropagation()
    dispatch(deletetrackfromplaylistApi({ songid, playlistid, token }))
  }


  const isInPlaylist = playlistTracks?.some(playlist => playlist.songid === track.songid)

  return (
    <>
      <Addtoplaylist isopen={modal} setState={setModal} trackid={selectedTrack} />
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
        {isInPlaylist ? <FaCheckCircle
          size={22}
          color='green'
          style={{ cursor: 'pointer' }}
          onClick={(e) => handleRemovefromplaylist(e, track.songid)} /> :
          <IoIosAddCircleOutline size={24} style={{ cursor: 'pointer' }} onClick={(e) => handleAddClick(e, track.songid)} />
        }

        <Trackruntime>
          <p>{Duration(track?.duration)}</p>
        </Trackruntime>
      </TrackCardMain>
    </>
  )
}

export default TrackCard
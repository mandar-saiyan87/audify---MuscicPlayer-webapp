import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentPlaylist } from '../../store/dataSlice';
import {
  SearchTrackCardMain,
  SearchTrackDetails,
  SearchTrackid,
  SearchTrackinfo,
  SearchTrackImage,
  SearchTrackDetailtext,
  SearchTrackruntime,
} from './searchtrackcard.styles';
import { useNavigate } from 'react-router-dom';


function SearchTrackCard({ trackdetails }) {

  const isLogedIn = useSelector((state) => state.appdata.loggedIn)

  const navigate = useNavigate()

  const [hoverState, setHoverState] = useState(false)

  const dispatch = useDispatch()

  const Duration = (duration) => {
    return duration.substring(0, 5); // Extracts the first 5 characters (MM:SS)
  };

  function handlePlayClick() {
    if (!isLogedIn) {
      navigate('/login')
    }
    dispatch(setcurrentPlaylist(trackdetails))
  }

  return (
    <SearchTrackCardMain
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      hoverstate={hoverState}
      onClick={handlePlayClick}>
      <SearchTrackDetails>
        <SearchTrackid>
          <FaPlay />
        </SearchTrackid>
        <SearchTrackinfo>
          <SearchTrackImage>
            <img src={trackdetails[0].imageurl} alt="track_image" className='track_card_img' />
          </SearchTrackImage>
          <SearchTrackDetailtext>
            <p className='track_title'>{trackdetails[0].title}</p>
            <p className='track_artist'>{trackdetails[0].artistname}</p>
          </SearchTrackDetailtext>
        </SearchTrackinfo>
      </SearchTrackDetails>
      <SearchTrackruntime>
        <p>{Duration(trackdetails[0].duration)}</p>
      </SearchTrackruntime>
    </SearchTrackCardMain>
  )
}

export default SearchTrackCard
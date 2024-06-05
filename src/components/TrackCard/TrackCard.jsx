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

function TrackCard({ track, index }) {

  const [hoverState, setHoverState] = useState(false)

  const Duration = (duration) => {
    return duration.substring(0, 5); // Extracts the first 5 characters (MM:SS)
  };

  return (
    <TrackCardMain
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      hoverstate={hoverState}>
      <TrackDetails>
        <Trackid>
          {hoverState ? <FaPlay /> : <p>{index + 1}</p>}
        </Trackid>
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
      <Trackruntime>
        <p>{Duration(track.duration)}</p>
      </Trackruntime>
    </TrackCardMain>
  )
}

export default TrackCard
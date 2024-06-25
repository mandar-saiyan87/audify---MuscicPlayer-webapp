import React from 'react'
import { getRandomColor } from '../../utils/generatecolor'
import { FaPlay } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
// CSS imported from AlbumDetails page styles
import {
  AlbumMain,
  AlbumHead,
  AlbumHeadContent,
  Imagediv,
  AlbumDetailsDiv,
  AlbumDetailsSub
} from '../AlbumDetails/albumdetails.styles'
// CSS imported from PlayList Card
import { NoImage } from '../../components/PlayListCard/playlistcard.styles';

function PlaylistDetails() {

  const bgcolor = getRandomColor()

  const { state } = useLocation()

  return (
    <AlbumMain bgcolor={bgcolor}>
      <AlbumHead>
        <AlbumHeadContent>
          <Imagediv>
            {!state.imgurl ?
              <NoImage>
                <IoMusicalNotes color='black' size={24} />
              </NoImage> :
              <img src={state.imgurl} alt="playlist_img" className='album_details_image' />
            }
          </Imagediv>
          <AlbumDetailsDiv>
            <button className='details_play_button' onClick={() => { }}>
              <FaPlay color='black' size={20} />
            </button>
            <p>{state.title}</p>
            <AlbumDetailsSub>
              {/* <p>{state.artistname}</p> */}
              {/* <p className='seperator'></p> */}
              {/* <p>{year}</p> */}
              {/* <p className='seperator'></p> */}
              {/* <p>{data?.trackList.length} &nbsp;songs</p> */}
            </AlbumDetailsSub>
          </AlbumDetailsDiv>
        </AlbumHeadContent>
      </AlbumHead>
    </AlbumMain>
  )
}

export default PlaylistDetails

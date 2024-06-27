import React, { useEffect } from 'react'
import { getRandomColor } from '../../utils/generatecolor'
import { FaPlay } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { getplaylisttracksApi } from '../../store/userPlaylistSlice';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie'
import TrackCard from '../../components/TrackCard/TrackCard';
import { setcurrentPlaylist } from '../../store/dataSlice';
// CSS imported from AlbumDetails page styles
import {
  AlbumMain,
  AlbumHead,
  AlbumHeadContent,
  Imagediv,
  AlbumDetailsDiv,
  AlbumDetailsSub,
  AlbumtracksDiv
} from '../AlbumDetails/albumdetails.styles'
// CSS imported from PlayList Card
import { NoImage } from '../../components/PlayListCard/playlistcard.styles';

function PlaylistDetails() {

  const token = useSelector((state) => state.user.token) || Cookies.get('token')
  const bgcolor = getRandomColor()
  const { state } = useLocation()
  const dispatch = useDispatch()

  const playlisttracks = useSelector((state) => state.playlist.playlistData)

  function setPlaylist() {
    dispatch(setcurrentPlaylist(playlisttracks))
  }

  useEffect(() => {
    dispatch(getplaylisttracksApi({ id: state.playlistid, token }))
  }, [dispatch, state])

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
            <button className='details_play_button' onClick={setPlaylist}>
              <FaPlay color='black' size={20} />
            </button>
            <p>{state.name}</p>
            <AlbumDetailsSub>
              <p>{playlisttracks?.length} &nbsp;songs</p>
            </AlbumDetailsSub>
          </AlbumDetailsDiv>
        </AlbumHeadContent>
      </AlbumHead>
      <AlbumtracksDiv>
        {playlisttracks?.map((track, index) => (
          <TrackCard track={track} index={index} key={track.songid} setPlaylist={setPlaylist} />
        ))}
      </AlbumtracksDiv>
    </AlbumMain>
  )
}

export default PlaylistDetails

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
import { getUserPlaylistApi } from '../../store/userPlaylistSlice';
import { setPlaylistData } from '../../store/userPlaylistSlice';
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

  const isLoggedin = useSelector((state) => state.user.loggedinUser)
  const token = useSelector((state) => state.user.token) || Cookies.get('token')
  const bgcolor = getRandomColor()
  const { state } = useLocation()
  const dispatch = useDispatch()

  // const playlisttracks = useSelector((state) => state.playlist.playlistData)
  const userPlaylists = useSelector((state) => state.playlist.userPlaylist)
  const currentPlaylist = userPlaylists?.filter(playlist => playlist.playlistid === state.playlistid)

  // console.log(userPlaylists)

  function setPlaylist() {
    dispatch(setcurrentPlaylist(currentPlaylist[0]?.songs))
  }

  useEffect(() => {
    if (isLoggedin && token) {
      dispatch(getUserPlaylistApi({
        userid: isLoggedin?.id,
        token
      }))
    }
  }, [dispatch, isLoggedin, token])

  useEffect(() => {
    dispatch(setPlaylistData(currentPlaylist[0]?.songs))
  }, [dispatch, currentPlaylist])

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
              <p>{currentPlaylist[0]?.songs.length} &nbsp;songs</p>
            </AlbumDetailsSub>
          </AlbumDetailsDiv>
        </AlbumHeadContent>
      </AlbumHead>
      <AlbumtracksDiv>
        {
          currentPlaylist[0]?.songs.map((track, index) => (
            <TrackCard track={track} index={index} key={track.songid} setPlaylist={setPlaylist} playlistid={currentPlaylist[0]?.playlistid} />
          ))
        }
        {/* {userPlaylists?.map((track, index) => (
          <TrackCard track={track} index={index} key={track.songid} setPlaylist={setPlaylist} />
        ))} */}
      </AlbumtracksDiv>
    </AlbumMain>
  )
}

export default PlaylistDetails

import React, { useState } from 'react'
import {
  PlaylistCardMain,
  Imagediv,
  NoImage,
  PlaylistInfo,
  DeleteButton
} from './playlistcard.styles'
import { IoMusicalNotes } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie'
import { deletePlaylistApi } from '../../store/userPlaylistSlice';
import { useNavigate } from 'react-router-dom';

function PlaylistCard({ playlist, hidden }) {

  const [hoverStatus, setHoverStatus] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const isUserLoggedIn = useSelector((state) => state.user.loggedinUser)
  const token = useSelector((state) => state.user.token) || Cookies.get('token')

  function handleDelete() {
    const deleteData = {
      id: playlist.playlistid, token
    }
    dispatch(deletePlaylistApi(deleteData))
  }

  function handleClick() {
    navigate(
      `/home/playlist/${playlist?.name}`,
      { state: playlist }
    )
  }

  return (
    <PlaylistCardMain
      onMouseEnter={() => setHoverStatus(true)}
      onMouseLeave={() => setHoverStatus(false)}
      onClick={handleClick} 
    >
      <PlaylistInfo>
        <Imagediv>
          {!playlist.imgurl ?
            <NoImage>
              <IoMusicalNotes color='black' size={24} />
            </NoImage> :
            <img src={playlist.imgurl} alt="playlistimg" className='playlist_img' />
          }
        </Imagediv>
        <p>{playlist.name}</p>
      </PlaylistInfo>
      <DeleteButton isHover={hoverStatus} onClick={handleDelete} hide={hidden}>
        <MdDelete color='red' size={20} />
      </DeleteButton>
    </PlaylistCardMain>
  )
}

export default PlaylistCard
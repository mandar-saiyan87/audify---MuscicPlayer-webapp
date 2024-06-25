import React, { useState } from 'react'
import {
  CreateNewPlaylisMain,
  CreateNewPlaylistHead,
  ImageDiv,
  PlaylistTitle,
} from './createplaylist.styles'
import { HiPlus } from "react-icons/hi2";
import { useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { createPlaylistApi } from '../../store/authSlice';


function CreateNewPlaylist() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [playlistname, setPlaylistName] = useState('New Playlist')
  const [description, setDescription] = useState('')
  const [imgurl, setImgUrl] = useState('')
  const [imginput, setImgInput] = useState(false)

  const matched = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  const isUserLoggedIn = useSelector((state) => state.user.loggedinUser)
  const token = useSelector((state) => state.user.token) || Cookies.get('token')

  function handlePlaylistCreate() {
    if (!isUserLoggedIn) {
      navigate('/login')
    } else {
      const newPlaylistData = {
        playlistname, description, imgurl, id: isUserLoggedIn.id, token
      }
      dispatch(createPlaylistApi(newPlaylistData))
      setPlaylistName('New Playlist')
      setImgUrl('')
    }
  }

  return (
    <CreateNewPlaylisMain>
      <CreateNewPlaylistHead>
        <ImageDiv onClick={() => setImgInput(!imginput)}>
          {imgurl.trim().length === 0 ?
            <HiPlus color='black' size={30} /> :
            <img src={imgurl} alt="playlistimg" className='playlistimage' />
          }
        </ImageDiv>
        {imginput && matched && <input type="text" className='imgurl_input' placeholder='img url....' onChange={(e) => setImgUrl(e.target.value)} value={imgurl} />}
        <PlaylistTitle>
          <input type="text" placeholder='Playlist Title' className='playlist_input' onChange={(e) => setPlaylistName(e.target.value)} value={playlistname} />
        </PlaylistTitle>
        <button className='createplaylist' onClick={handlePlaylistCreate}>Create</button>
      </CreateNewPlaylistHead>
      {imginput && !matched && <input type="text" className='imgurl_input' placeholder='img url....' onChange={(e) => setImgUrl(e.target.value)} value={imgurl} />}
    </CreateNewPlaylisMain>
  )
}

export default CreateNewPlaylist
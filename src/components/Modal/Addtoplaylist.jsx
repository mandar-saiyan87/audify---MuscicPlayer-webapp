import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import PlaylistCard from '../PlayListCard/PlaylistCard';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie'
import {
  PlaylistDiv,
  SelectionDiv,
  BoxStyle
} from './addtoplaylist.styles';
import { Colors } from '../../assets/constants';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { addtracktoplaylistApi } from '../../store/userPlaylistSlice';

function Addtoplaylist({ isopen, setState, trackid }) {

  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  const dispatch = useDispatch()
  const userPlaylists = useSelector((state) => state.playlist.userPlaylist)
  const isLoggedin = useSelector((state) => state.user.loggedinUser)
  const token = useSelector((state) => state.user.token) || Cookies.get('token')

  function handlePlaylistSelect(playlistId) {
    if (selectedPlaylists.includes(playlistId)) {
      setSelectedPlaylists(selectedPlaylists.filter(id => id !== playlistId));
    } else {
      setSelectedPlaylists([...selectedPlaylists, playlistId]);
    }
  }

  function addtracktoplaylist() {
    dispatch(addtracktoplaylistApi({ selectedPlaylists, trackid, token }))
  }
  
  return (
    <Modal
      open={isopen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle>
        <PlaylistDiv>
          {!isLoggedin &&
            <>
              <p>Login to add to playlist</p>
              <Link to='/login'>
                <button className='log_in_btn' style={{ margin: '1rem 0', backgroundColor: Colors.primary }}>Login</button>
              </Link>
            </>
          }
          {userPlaylists?.map((playlist) => (
            <SelectionDiv key={playlist.playlistid}>
              <PlaylistCard playlist={playlist} hidden={true} />
              <FaCheckCircle
                size={22}
                color={selectedPlaylists.includes(playlist.playlistid) ? 'green' : ''}
                style={{ cursor: 'pointer' }}
                onClick={() => handlePlaylistSelect(playlist.playlistid)} />
            </SelectionDiv>
          ))}
          <button className='log_in_btn' style={{ margin: '1rem 0', backgroundColor: Colors.primary }} onClick={addtracktoplaylist}>Add</button>
        </PlaylistDiv>
      </BoxStyle>
    </Modal>
  )
}

export default Addtoplaylist
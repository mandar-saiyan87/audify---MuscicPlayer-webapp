import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useLocation, useNavigate, Outlet } from 'react-router-dom'
import {
  ContentDiv,
  Contentheader,
  MenuDiv,
  MenuItem,
  AuthDiv,
  Playlist,
  PlaylistHead,
  PlaylistTitle,
  CreatePlaylist,
  UserSetings
} from './maincontent.styles'
import Drawer from '@mui/material/Drawer';
import { useMediaQuery } from '@mui/material';
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from '../../../../components/Logo';
import { menubar } from '../../../../assets/constants';
import { VscLibrary } from "react-icons/vsc";
import { HiPlus } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import LyricsPage from '../../../Lyrics/LyricsPage';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";




function MainContent() {

  const isUser = useSelector((state) => state.user.loggedinUser)

  const showLyrics = useSelector((state) => state.appdata.isLyrics)

  const matches = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));

  const [toggleLogout, setLogout] = useState(false)

  const currentUrl = useLocation()
  const navigate = useNavigate()

  const userRef = useRef()

  const [menuDrawer, setmenuDrawer] = useState(false)

  function toggleMenuDrawer() {
    setmenuDrawer(false);
  };

  useEffect(() => {
    if (currentUrl.pathname === '/') {
      navigate('/home')
    }
  }, [currentUrl, navigate])

  useEffect(() => {
    function handleClickout(e) {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setLogout(false)
      }
    }
    document.addEventListener('click', handleClickout)
    return () => {
      document.removeEventListener('click', handleClickout)
    }
  }, [userRef])


  return (
    <>
      <ContentDiv>
        <Contentheader>
          <HiMenuAlt2 size={30} className='menu_drawer_button' onClick={() => setmenuDrawer(true)} />

          <AuthDiv>
            {!isUser ?
              <>
                <Link to={`/signup`}>
                  <button className='sign_up_btn'>Sign Up</button>
                </Link>
                <Link to={`/login`}>
                  <button className='log_in_btn'>Log In</button>
                </Link>
              </> :
              <div div ref={userRef} onClick={() => setLogout(!toggleLogout)}>
                <FaCircleUser color='white' size={25}
                  className='user_settings_ico'
                />
              </div>
            }
            {
              toggleLogout && <UserSetings>
                <p>Logout</p>
              </UserSetings>
            }

          </AuthDiv>
        </Contentheader>
        {showLyrics ? <LyricsPage /> : <Outlet />}
      </ContentDiv>
      <Drawer open={menuDrawer} onClose={() => toggleMenuDrawer(false)} SlideProps={{
        sx: {
          backgroundColor: '#373A40',
          width: matches ? '50%' : '65%',
          padding: '0.5rem'
        }
      }}>
        <Logo />
        <MenuDiv>
          {menubar.map((menu) => (
            <NavLink to={menu.route} className={({ isActive }) =>
              isActive ? 'nav_link_active' : 'nav_link'
            } key={menu.name}>
              <MenuItem>
                {menu.ico}
                <p>{menu.name}</p>
              </MenuItem>
            </NavLink>
          ))}
        </MenuDiv>
        <Playlist>
          <PlaylistHead>
            <PlaylistTitle>
              <VscLibrary size={22} color='#8392A7' />
              <p className='library_head_title'>Your Library</p>
            </PlaylistTitle>
            <HiPlus color='#8392A7' />
          </PlaylistHead>
          <CreatePlaylist>
            <p className='create_playlist'>Create your playlist</p>
            <p className='create_playlist_sub'>It's easy</p>
            <button className='create_playlist_button'>Create Playlist</button>
          </CreatePlaylist>
        </Playlist>
      </Drawer>
    </>
  )
}

export default MainContent

// SlideProps = {{
//   sx: {
//     backgroundColor: '#373A40',
//       width: '60%',
//         }
// }}
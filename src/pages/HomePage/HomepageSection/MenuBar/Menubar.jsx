import React from 'react'
import { Appmenu, MenuDiv, MenuItem, Playlist, PlaylistHead, PlaylistTitle, CreatePlaylist } from './menubar.styles'
import { NavLink } from 'react-router-dom';
import Logo from '../../../../components/Logo'
import { menubar } from '../../../../assets/constants';
import { VscLibrary } from "react-icons/vsc";
import { HiPlus } from "react-icons/hi2";



function Menubar() {

  return (
    <>
      <Appmenu>
        <Logo />
        <MenuDiv>
          {menubar.map((menu) => (
            <NavLink to={menu.route} className={({ isActive }) =>
              isActive ? 'nav_link_active' : 'nav_link'
            }>
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
              <VscLibrary size={22} color='#8392A7'/>
              <p className='library_head_title'>Your Library</p>
            </PlaylistTitle>
            <HiPlus color='#8392A7'/>
          </PlaylistHead>
          <CreatePlaylist>
            <p className='create_playlist'>Create your playlist</p>
            <p className='create_playlist_sub'>It's easy</p>
            <button className='create_playlist_button'>Create Playlist</button>
          </CreatePlaylist>
        </Playlist>
      </Appmenu>
    </>
  )
}

export default Menubar
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ContentDiv, Contentheader, MenuDiv, MenuItem } from './maincontent.styles'
import Drawer from '@mui/material/Drawer';
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from '../../../components/Logo';
import { menubar } from '../../../assets/constants';
import Discover from '../../Discover/Discover';



function MainContent() {

  const [menuDrawer, setmenuDrawer] = useState(false)

  function toggleMenuDrawer() {
    setmenuDrawer(false);
  };


  return (
    <>
      <ContentDiv>
        <Contentheader>
          <HiMenuAlt2 size={30} className='menu_drawer_button' onClick={() => setmenuDrawer(true)} />
        </Contentheader>
        <Discover />
      </ContentDiv>
      <Drawer open={menuDrawer} onClose={() => toggleMenuDrawer(false)} SlideProps={{
        sx: {
          backgroundColor: '#373A40',
          width: '60%'
        }
      }}>
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
      </Drawer>
    </>
  )
}

export default MainContent
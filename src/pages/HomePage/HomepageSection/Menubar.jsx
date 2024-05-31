import React from 'react'
import { Appmenu, MenuDiv, MenuItem } from './menubar.styles'
import { NavLink } from 'react-router-dom';
import Logo from '../../../components/Logo'
import { menubar } from '../../../assets/constants';



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
      </Appmenu>
    </>
  )
}

export default Menubar
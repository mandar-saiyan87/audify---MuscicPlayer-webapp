import React from 'react'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../../../components/Logo'
import { menubar } from '../../../assets/constants';




const Appmenu = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  width: '15%',
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    width: '35%'
  }
}));

const MenuDiv = styled.div`
   margin-top: 1rem;
   padding: 1rem;
`

const MenuItem = styled.div`
   display: flex;
  align-items: center;
	justify-content: start;
  gap: 0.3rem;
  margin: 2rem 0;
`


function Menubar() {

  const isTablet = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {
        !isTablet &&
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
      }

    </>
  )
}

export default Menubar
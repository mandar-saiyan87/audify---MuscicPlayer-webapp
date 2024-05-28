import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { LuSearch } from "react-icons/lu";
import Drawer from '@mui/material/Drawer';
import { Colors } from '../../../assets/constants';
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from '../../../components/Logo';
import { menubar } from '../../../assets/constants';


const ContentDiv = styled('div')(({ theme }) => ({
  backgroundColor: '#373A40',
  width: '100%',
  height: '100dvh',
  padding: '2rem',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: '1.2rem 1rem',
  }
}))


const SearchBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '0.5rem',
  padding: '0.7rem',
  backgroundColor: 'black',
  width: '70%',
  borderRadius: '0.3rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const Contentheader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2rem',
  gap: '1rem'
}))

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


function MainContent() {

  const currenturl = useLocation()
  const navigate = useNavigate()

  const [menuDrawer, setmenuDrawer] = useState(false)

  function toggleMenuDrawer() {
    setmenuDrawer(false);
  };

  useEffect(() => {
    if (currenturl.pathname === '/') {
      navigate('/discover')
    }
  }, [currenturl, navigate])

  return (
    <>
      <ContentDiv>
        <Contentheader>
          <HiMenuAlt2 size={30} className='menu_drawer_button' onClick={() => setmenuDrawer(true)} />
          <SearchBar>
            <LuSearch />
            <input type="text" className='search_input' />
          </SearchBar>
        </Contentheader>
        <Outlet />
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
import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { LuSearch } from "react-icons/lu";
import { Colors } from '../../../assets/constants';


const ContentDiv = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  width: '100%',
  height: '100dvh',
  padding: '1.2rem'
}))


const SearchBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '0.5rem',
  padding: '0.7rem',
  backgroundColor: Colors.secondary,
  width: '70%',
  borderRadius: '0.3rem',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

function MainContent() {

  const currenturl = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (currenturl.pathname === '/') {
      navigate('/discover')
    }
  }, [currenturl, navigate])

  return (
    <ContentDiv>
      <SearchBar>
        <LuSearch />
        <input type="text" className='search_input' />
      </SearchBar>
      <Outlet />
    </ContentDiv>
  )
}

export default MainContent
import React from 'react'
import Menubar from './HomepageSection/MenuBar/Menubar'
import MainContent from './HomepageSection/MainContent/MainContent'
import styled from '@emotion/styled'



const AppContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  padding: '0.5rem',
  overflow: 'hidden',
  backgroundColor: 'black',
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  }
}))


function Homepage() {
  return (
    <AppContainer>
      <Menubar />
      <MainContent />
    </AppContainer>
  )
}

export default Homepage

import React from 'react'
import Menubar from './HomepageSection/Menubar'
import MainContent from './HomepageSection/MainContent'
import styled from '@emotion/styled'


const AppContainer = styled.div`
  display: flex;
  height: 100%
`

function Homepage() {
  return (
    <AppContainer>
      <Menubar />
      <MainContent />
    </AppContainer>
  )
}

export default Homepage

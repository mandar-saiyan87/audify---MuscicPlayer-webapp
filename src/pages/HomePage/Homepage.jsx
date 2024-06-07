import React from 'react'
import Menubar from './HomepageSection/MenuBar/Menubar'
import MainContent from './HomepageSection/MainContent/MainContent'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'



const AppContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'black',
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  }
}))

const HomePageView = styled('div')(({ theme, playState }) => ({
  width: '100%',
  display: 'flex',
  height: '100vh',
  margin: 'auto',
  padding: '0.5rem',
  paddingBottom: playState && '7rem'
}))

const AudioPlayerContainer = styled('div')({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  backgroundColor: 'black',
  zIndex: 1000,
})


function Homepage() {

  const playlist = useSelector((state) => state.appdata.currentPlaylist)

  return (
    <AppContainer>
      <HomePageView playState={playlist.length > 0 && true}>
        <Menubar />
        <MainContent />
      </HomePageView>
      {playlist.length > 0 && <AudioPlayerContainer>
        <AudioPlayer />
      </AudioPlayerContainer>}

    </AppContainer>
  )
}

export default Homepage




  // < AppContainer >
  //     <Menubar />
  //     <MainContent />
//   </ AppContainer >
  
// const AppContainer = styled('div')(({ theme }) => ({
//   height: '100vh',
//   display: 'flex',
//   padding: '0.5rem',
//   overflow: 'hidden',
//   backgroundColor: 'black',
//   [theme.breakpoints.down('sm')]: {
//     padding: '0',
//   }
// }))

// const HomePageView = styled('div')(({ theme }) => ({
//   // height: '100%',
//   display: 'flex',
//   padding: '0.5rem',
//   overflow: 'hidden',
//   backgroundColor: 'black',
//   [theme.breakpoints.down('sm')]: {
//     padding: '0',
//   }
// }))

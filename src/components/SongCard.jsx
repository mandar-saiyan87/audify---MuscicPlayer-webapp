import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Colors } from '../assets/constants'

const slideup = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const SongCardMain = styled('div')(({ theme }) => ({
  width: '280px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  animation: `${slideup} 0.5s ease-out`,
  borderRadius: '0.3rem',
  padding: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const SongCardSec = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 'auto',
}))

const Overlay = styled('div')(({ theme, active }) => ({
  position: 'absolute',
  inset: '0',
  width: '100%',
  height: '100%',
  // justifyContent: 'center',
  // alignItems: 'center',
  zIndex: '1',
  ':hover': {
    backgroundColor: active ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    display: active ? 'flex' : 'none',

  }
}))

const SongTitle = styled('div')(({ theme }) => ({
  fontSize: '1rem',
  color: Colors.tertiary,
  fontWeight: '600',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

const SongArtist = styled('div')(({ theme }) => ({
  fontSize: '1rem',
  color: Colors.tertiary,
  marginTop: '0.5rem'
}))


function SongCard({ song, songIndex }) {

  const isActive = true

  return (
    <SongCardMain>
      <Overlay active={isActive}></Overlay>
      <SongCardSec>
        <img src={song.album.images[0]?.url} alt="album_image" className='albumImage' />
        <SongTitle>{song.album.name}</SongTitle>
        <SongArtist>{song.album.artists[0].name}</SongArtist>
      </SongCardSec>
    </SongCardMain>
  )
}

export default SongCard

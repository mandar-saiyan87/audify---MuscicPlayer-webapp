import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

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
  width: '250px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  animation: `${slideup} 0.5s ease-out`,
  borderRadius: '0.3rem',
  padding: '1rem'
}))

const SongCardSec = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '230px'
}))

const SongCardTer = styled('div')(({ theme, active }) => ({
  position: 'absolute',
  inset: '0',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    backgroundColor: active && 'rgba(0, 0, 0, 0.5)',
    display: active ? 'flex' : '',
  }
}))

function SongCard({ song, songIndex }) {

  const isActive = true

  return (
    <SongCardMain>
      <SongCardSec>
        <SongCardTer active={isActive}>

        </SongCardTer>
      </SongCardSec>
    </SongCardMain>
  )
}

export default SongCard

import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const AudioPlayerMain = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'black',
  zIndex: '20',
  padding: '0.5rem'
}))

export const AudioPlayerComponent = styled('div')(({ theme }) => ({
  display: 'flex'
}))


export const Player = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 'max-content',
  alignItems: 'center',
  rowGap: '0.5rem',
}))

export const SeekBarComponent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px'
}))

export const SeekBarDuration = styled('div')(({ theme }) => ({
  display: 'flex',
  fontSize: '0.9rem',
  margin: '0.3rem 0'
}))

export const PlayerButtonsComponent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.8rem'
}))

export const SongDetails = styled('div')(({ theme }) => ({
  display: 'flex'
}))

export const ImgaeDiv = styled('div')(({ theme }) => ({
  width: '70px',
  height: '70px'
}))
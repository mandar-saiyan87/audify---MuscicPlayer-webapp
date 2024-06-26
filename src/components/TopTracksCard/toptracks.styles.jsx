import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'



export const TopTracksCardMain = styled('div')(({ theme }) => ({
  maxWidth: '300px',
  height: '300px',
  position: 'relative',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%'
  }
}))

export const Overlay = styled('div')(({ theme, Hover }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: Hover ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'end',
  top: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '1',
}))

export const TrackDetails = styled('div')(({ theme }) => ({
  padding: '0.5rem'
}))

export const ImgDiv = styled('div')(({ theme }) => ({
  width: '100%',
  height: '220px',
  overflow: 'none'
}))

export const ButtonsDiv = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  top: '10rem'
}))
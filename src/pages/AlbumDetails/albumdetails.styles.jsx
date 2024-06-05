import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'


export const AlbumMain = styled('div')(({ theme, bgcolor }) => ({
  minHeight: '100%',
  // backgroundColor: bgcolor
  background: `linear-gradient(to bottom, ${bgcolor} 10%, rgba(255, 255, 255, 0) 85%)`
}))

export const AlbumHead = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  padding: '4rem 1rem 1rem',
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 0.5rem 0.5rem',
  }
}))

export const AlbumHeadContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  gap: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    gap: '1rem',
  }
}))

export const AlbumDetailsDiv = styled('div')(({ theme }) => ({
  color: Colors.quaternary,
  fontSize: '2rem',
  fontWeight: '700',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem',
  }
}))

export const AlbumDetailsSub = styled('div')(({ theme }) => ({
  fontSize: '0.8rem',
  fontWeight: '600',
  paddingBottom: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '0.7rem',
  [theme.breakpoints.down('sm')]: {
    gap: '0.3rem',
    textAlign: 'center'
  }
}))

export const Imagediv = styled('div')(({ theme }) => ({
  maxWidth: '200px',
  maxHeight: '200px',
  borderRadius: '0.3rem',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '150px',
    maxHeight: '150px',
  }
}))

export const AlbumtracksDiv = styled('div')(({ theme }) => ({
  maxWidth: '1440px',
  // backgroundColor: 'white',
  margin: '2rem 0',
  padding: '0 1.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
  }
}))
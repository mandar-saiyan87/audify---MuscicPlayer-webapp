import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const TrackCardMain = styled('div')(({ theme, hoverstate }) => ({
  margin: '1.2rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: Colors.quaternary,
  cursor: 'pointer',
  backgroundColor: hoverstate && 'rgba(255, 255,255, 0.2)',
  padding: '0.5rem 0',
  borderRadius: '0.3rem'
}))

export const TrackDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    columnGap: '0.3rem'
  }
}))

export const Trackid = styled('div')(({ theme }) => ({
  width: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '0.9rem',
  fontWeight: '600',
  padding: '0 1rem',
  [theme.breakpoints.down('sm')]: {
    width: '2rem',
    padding: '0 0.5rem',
  }
}))

export const Trackinfo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.7rem'
}))

export const TrackImage = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '90px',
  height: '80px',
  borderRadius: '0.3rem',
  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
  }
}))

export const TrackDetailtext = styled('div')(({ theme }) => ({
  flex: 1
}))

export const Trackruntime = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  padding: '0 1.2rem'
}))
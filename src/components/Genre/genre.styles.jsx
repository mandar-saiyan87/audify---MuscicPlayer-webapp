import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const GenreMain = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  maxWidth: '1536px'
}))

export const GenreContainer = styled('div')(({ theme }) => ({
  margin: '1.5rem 0',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    gap: '1.5rem'
  },
  [theme.breakpoints.down('sm')]: {

  }
}))

export const GenreDiv = styled('div')(({ theme, bgColor }) => ({
  maxWidth: '200px',
  maxHeight: '200px',
  padding: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgColor,
  color: Colors.quaternary,
  fontSize: '1.3rem',
  fontWeight: '600',
  borderRadius: '0.7rem',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
    padding: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '2rem',
  },
}))
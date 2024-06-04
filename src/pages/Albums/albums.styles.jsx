import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const AlbumPageMain = styled('div')(({ theme }) => ({
  padding: '2rem',
  maxWidth: '1536px'
}))

export const AlbumContainer = styled('div')(({ theme }) => ({
  margin: '1.5rem 0',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '1rem'
}))

export const CardContainer = styled('div')(({ theme }) => ({
  width: '250px',
  [theme.breakpoints.down('sm')]: {
    width: '300px'
  }
}))
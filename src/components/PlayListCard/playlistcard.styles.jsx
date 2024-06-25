import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const PlaylistCardMain = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '0.5rem',
  fontSize: '1rem',
  fontWeight: '500',
  color: 'white',
  padding: '0.4rem',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: Colors.tertiary,
    borderRadius: '0.2rem'
  }
}))

export const Imagediv = styled('div')(({ theme }) => ({
  width: '65px',
  height: '60px',
  borderRadius: '0.2rem'
}))

export const NoImage = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: Colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.2rem'
}))

export const PlaylistInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  columnGap: '0.5rem',
}))

export const DeleteButton = styled('div')(({ theme, isHover }) => ({
  display: isHover ? 'flex' : 'none',
  cursor: 'pointer',
  [theme.brealpoints.down('md')]: {
    display: 'none'
  }
}))
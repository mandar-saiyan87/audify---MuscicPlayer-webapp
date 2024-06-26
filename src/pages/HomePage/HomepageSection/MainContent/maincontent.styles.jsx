import styled from '@emotion/styled'
import { Colors } from '../../../../assets/constants'


export const ContentDiv = styled('div')(({ theme }) => ({
  flex: '1',
  height: '100%',
  marginLeft: '0.5rem',
  borderRadius: '0.3rem',
  overflow: 'auto',
  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
  },
}))


export const Contentheader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: Colors.secondary,
  zIndex: '1000',
  [theme.breakpoints.down('sm')]: {
    top: '-1px'
  }
}))

export const MenuDiv = styled('div')({
  marginTop: '2rem',
  padding: '0 1rem',
  // backgroundColor: Colors.secondary,
  borderRadius: '0.2rem'
})


export const MenuItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '0.3rem',
  margin: '1.5rem 0'
})

export const Playlist = styled('div')({
  marginTop: '0.5rem',
  padding: '1rem 0.5rem',
  backgroundColor: Colors.secondary,
  borderRadius: '0.2rem'
})

export const PlaylistHead = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 0.5rem'
})

export const PlaylistTitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.2rem'
})

export const CreatePlaylist = styled('div')({
  marginTop: '1.5rem',
  backgroundColor: Colors.tertiary,
  padding: '1rem',
  borderRadius: '0.4rem'
})

export const AuthDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: Colors.secondary,
  width: '100%',
  alignContent: 'end',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  gap: '1.5rem',
  padding: '0.5rem',
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'transparent',
    padding: '0.4rem 0'
  },
}))

export const UserSetings = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.9rem',
  fontWeight: 500,
  color: 'white',
  backgroundColor: Colors.tertiary,
  padding: '0.5rem 1.3rem',
  borderRadius: '0.2rem',
  cursor: 'pointer',
  top: '2.1rem'
}))


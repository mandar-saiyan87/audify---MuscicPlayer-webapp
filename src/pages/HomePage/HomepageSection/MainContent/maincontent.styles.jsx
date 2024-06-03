import styled from '@emotion/styled'
import { Colors } from '../../../../assets/constants'


export const ContentDiv = styled('div')(({ theme }) => ({
  width: '80%',
  minHeight: '100vh',
  marginLeft: '0.5rem',
  borderRadius: '0.3rem',
  overflow: 'auto',
  [theme.breakpoints.down('md')]: {
    marginLeft: '0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem 0',
  }
}))


export const Contentheader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    padding: '0.2rem'
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

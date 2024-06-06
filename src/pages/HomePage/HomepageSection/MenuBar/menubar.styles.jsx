import styled from '@emotion/styled'
import { Colors } from '../../../../assets/constants';

export const Appmenu = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  width: '25vw',
  height: '100%',
  padding: '1.5rem 0',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export const MenuDiv = styled('div')({
  marginTop: '2rem',
  padding: '0 1rem',
  backgroundColor: Colors.secondary,
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

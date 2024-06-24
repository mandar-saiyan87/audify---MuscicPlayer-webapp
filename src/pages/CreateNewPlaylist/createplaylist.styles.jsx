import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const CreateNewPlaylisMain = styled('div')(({ theme }) => ({
  padding: '2rem'
}))

export const CreateNewPlaylistHead = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  columnGap: '0.7rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'start',
    rowGap: '0.7rem'
  }
}))


export const ImageDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100px',
  height: '100px',
  backgroundColor: Colors.defaulttext,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '0.3rem'
}))

export const PlaylistTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  width: '50%',
  height: '100px',
  backgroundColor: Colors.defaulttext,
  color: 'black',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))
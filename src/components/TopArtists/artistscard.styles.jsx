import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const ArtistsCardMain = styled('div')(({ theme }) => ({
  maxWidth: '200px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  cursor: 'pointer'
}))

export const ArtistsCardImage = styled('div')(({ theme }) => ({
  maxWidth: '150px',
  height: '150px',
  borderRadius: '50%',
  overflow: 'none',
}))
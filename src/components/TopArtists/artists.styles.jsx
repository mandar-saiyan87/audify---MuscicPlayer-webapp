import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const ArtistsCardMain = styled('div')(({ theme }) => ({
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  cursor: 'pointer'
}))

export const ArtistsCardImage = styled('div')(({ theme }) => ({
  height: '150px',
  borderRadius: '50%',
  overflow: 'none'
}))
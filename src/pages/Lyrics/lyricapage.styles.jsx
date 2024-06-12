import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const LyricsMain = styled('div')(({ theme, bgcolor }) => ({
  minHeight: '100%',
  background: `linear-gradient(to bottom, ${bgcolor} 10%, rgba(255, 255, 255, 0) 85%)`,
  color: Colors.quaternary,
  lineHeight: '2.2rem',
  fontSize: '1.3rem',
  fontWeight: '600',
  padding: '1rem'
}))
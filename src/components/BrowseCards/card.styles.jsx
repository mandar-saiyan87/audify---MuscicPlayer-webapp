import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const CardMain = styled('div')(({ theme, bgColor }) => ({
  height: '150px',
  backgroundColor: bgColor,
  color: Colors.quaternary,
  fontSize: '1.2rem',
  fontWeight: '600',
  padding: '0.5rem',
  textWrap: 'wrap',
  borderRadius: '0.5rem',
  cursor: 'pointer'
}))
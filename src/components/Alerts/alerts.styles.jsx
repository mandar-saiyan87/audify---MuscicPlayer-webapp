import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const AlertMain = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  top: '10px',
  right: '15px',
  backgroundColor: Colors.secondary,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.7rem 1.2rem',
  fontSize: '1rem',
  color: Colors.quaternary
}))

export const AlertMessage = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '0.5rem'
}))
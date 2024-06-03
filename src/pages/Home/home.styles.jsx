import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const HomeMain = styled('div')(({ theme }) => ({
  backgroundColor: 'rgb(27, 27, 27)',
  height: '100%',
  padding: '2rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem'
  }
}))

export const SelectionTab = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '1rem',
  marginBottom: '2rem'
}))

export const Select = styled('div')(({ theme, active }) => ({
  fontSize: '0.9rem',
  border: active ? 'none' : `1px solid ${Colors.quaternary}`,
  borderRadius: '1rem',
  padding: '0.5rem 1.2rem',
  color: active ? 'black' : Colors.defaulttext,
  backgroundColor: active ? Colors.primary : '',
  cursor: 'pointer',
}))
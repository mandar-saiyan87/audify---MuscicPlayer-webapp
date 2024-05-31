import styled from '@emotion/styled'
import { Colors } from '../../../assets/constants';

export const Appmenu = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  width: '25vw',
  height: '100vh',
  padding: '1.5rem 0.5rem',
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

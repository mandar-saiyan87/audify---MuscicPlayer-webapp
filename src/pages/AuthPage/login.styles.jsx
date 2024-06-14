import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'


export const LoginPageMain = styled('div')(({ theme }) => ({
  height: '100vh',
  background: `linear-gradient(to bottom, ${Colors.tertiary} 25%, black 100%)`,
  padding: '2rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem',
  }
}))

export const LoginContainer = styled('div')(({ theme }) => ({
  backgroundColor: Colors.secondary,
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  padding: '2rem 4.5rem',
  borderRadius: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem 1.5rem',
  }
}))

export const LogoDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
}))

export const LoginDetails = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

export const PasswordInput = styled('div')(({ theme, isoutline }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${Colors.defaulttext}`,
  color: Colors.quaternary,
  borderRadius: '0.2rem',
  padding: '0 1rem',
  outline: isoutline && `1px solid ${Colors.quaternary}`
}))

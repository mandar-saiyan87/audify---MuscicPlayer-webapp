import styled from '@emotion/styled'


export const ContentDiv = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  width: '100%',
  height: '100dvh',
  padding: '1rem',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: '1.2rem 1rem',
  }
}))


export const Contentheader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}))

export const MenuDiv = styled('div')({
  marginTop: '1rem',
  padding: '1rem',
})


export const MenuItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '0.3rem',
  margin: '2rem 0'
})

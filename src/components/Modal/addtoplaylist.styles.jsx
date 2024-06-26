import styled from '@emotion/styled'


export const BoxStyle = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'black',
  width: '40%',
  padding: '2rem'
}))

export const PlaylistDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

export const SelectionDiv = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0.5rem 0'
}))

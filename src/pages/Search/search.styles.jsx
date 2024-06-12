import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'


export const SearchPageMain = styled('div')(({ theme, bgcolor }) => ({
  minHeight: '100%',
  background: `linear-gradient(to bottom, ${bgcolor} 10%, rgba(255, 255, 255, 0) 85%)`,
  padding: '2rem',
  backgroundColor: 'rgb(27, 27, 27)',
}))

export const SearchBar = styled('div')(({ theme, outlineCol }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 'max-content',
  backgroundColor: Colors.tertiary,
  borderRadius: '1.5rem',
  padding: '0.5rem 0.7rem',
  ':hover': {
    border: `1px solid #424242`
  },
  border: outlineCol && `1px solid ${Colors.quaternary}`
}))
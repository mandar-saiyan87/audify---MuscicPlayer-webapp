import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const ArtsistsPageMain = styled('div')(({ theme }) => ({
  padding: '2rem',
  maxWidth: '1536px',
  [theme.breakpoints.down('md')]: {
    padding: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem',

  }
}))

export const ArtsistsContainer = styled('div')(({ theme }) => ({
  margin: '1.5rem 0',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '2.2rem',
  [theme.breakpoints.down('md')]: {
    gap: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '2.2rem',
  }
}))

export const CardContainer = styled('div')(({ theme }) => ({

}))
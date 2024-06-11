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
  justifyContent: 'start',
  rowGap: '1rem',
  columnGap: '2rem',
  [theme.breakpoints.down('md')]: {
    columnGap: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    columnGap: '1.4rem',
    justifyContent: 'center'
  }
}))


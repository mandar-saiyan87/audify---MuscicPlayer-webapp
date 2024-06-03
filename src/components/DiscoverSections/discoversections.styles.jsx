import styled from '@emotion/styled'
import { Colors } from '../../assets/constants'

export const DiscoverSectionMain = styled('div')(({ theme }) => ({

}))

export const SectionHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))



export const Slide = styled('div')(({ theme, color }) => ({
  height: '150px',
  backgroundColor: color,
  borderRadius: '0.5rem',
  color: Colors.quaternary,
  padding: '1rem',
  fontSize: '1.5rem',
  fontWeight: '600',
}))
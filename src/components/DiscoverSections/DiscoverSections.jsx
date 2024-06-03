import React from 'react'
import {
  DiscoverSectionMain,
  SectionHeader
} from './discoversections.styles'

function DiscoverSections({ categories }) {
  return (
    <DiscoverSectionMain>
      <SectionHeader>
        <p className='section_title'>Discover</p>
        <p className='section_showall'>Show All</p>
      </SectionHeader>

    </DiscoverSectionMain>
  )
}

export default DiscoverSections

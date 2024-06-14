import React from 'react'
import { CardMain } from './card.styles'

function GenreCard({ bgColor, name }) {
  return (
    <CardMain bgColor={bgColor}>
      {name}
    </CardMain>
  )
}

export default GenreCard

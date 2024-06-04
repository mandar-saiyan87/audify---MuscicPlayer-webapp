import React from 'react'
import { ArtistsCardMain, ArtistsCardImage } from './artists.styles'

function ArtistsCard({ carddetails }) {
  return (
    <ArtistsCardMain>
      <ArtistsCardImage>
        <img src={carddetails.imageurl} alt="artistsImage" className='artists_image' />
        <p className='album_title'>{carddetails.name}</p>
      </ArtistsCardImage>
    </ArtistsCardMain>
  )
}

export default ArtistsCard
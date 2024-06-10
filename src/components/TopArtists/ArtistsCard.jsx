import React from 'react'
import { ArtistsCardMain, ArtistsCardImage } from './artistscard.styles'
import { useNavigate } from 'react-router-dom'

function ArtistsCard({ carddetails }) {

  const navigate = useNavigate()

  function navigateTo(){
    navigate(
      `/home/artist/${carddetails.artistid}`,
      { state: carddetails }
    )
  }

  return (
    <ArtistsCardMain onClick={navigateTo}>
        <ArtistsCardImage>
          <img src={carddetails.imageurl} alt="artistsImage" className='artists_image' />
          <p className='album_title'>{carddetails.name}</p>
        </ArtistsCardImage>
      </ArtistsCardMain>
  )
}

export default ArtistsCard
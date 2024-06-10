import React, { useEffect } from 'react'
import { ArtsistsPageMain, ArtsistsContainer } from './artists.styles'
import { useGetArtistsQuery } from '../../store/services/songsApi'
import { useDispatch } from 'react-redux'
import { setArtists } from '../../store/dataSlice'
import ArtistsCard from '../../components/TopArtists/ArtistsCard'


function Artists() {

  const { data, error, isLoading } = useGetArtistsQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setArtists(data?.artistsList))
  }, [data, dispatch])

  return (
    <ArtsistsPageMain>
      <p className='page_head_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo delectus architecto voluptatem nihil beatae placeat,
        ipsum repellat ipsa aspernatur voluptas amet. Laudantium distinctio aliquam fugiat placeat officia necessitatibus.</p>
      <ArtsistsContainer>
        {data?.artistsList.map((artist) => (
          <ArtistsCard carddetails={artist} key={artist.artistid} />
        ))}
      </ArtsistsContainer>
    </ArtsistsPageMain>
  )
}

export default Artists
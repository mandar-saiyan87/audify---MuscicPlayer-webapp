import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AlbumPageMain, AlbumContainer, CardContainer } from './albums.styles'
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import { useGetAlbumsQuery } from '../../store/services/songsApi'
import { setAlbums } from '../../store/dataSlice'

function Albums() {

  const { data, error, isLoading } = useGetAlbumsQuery()


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAlbums(data?.albumsList))
  }, [data, dispatch])

  return (
    <AlbumPageMain>
      <p className='page_head_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo delectus architecto voluptatem nihil beatae placeat,
        ipsum repellat ipsa aspernatur voluptas amet. Laudantium distinctio aliquam fugiat placeat officia necessitatibus.</p>
      <AlbumContainer>
        {data?.albumsList.map((album) => (
          <CardContainer key={album.albumid}>
            <AlbumCard carddetails={album} />
          </CardContainer>
        ))}
      </AlbumContainer>
    </AlbumPageMain>
  )
}

export default Albums
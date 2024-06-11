import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  GenreMain,
  GenreDetailsDiv,
  GenreDetailsSub,
  GenreHead,
  GenreHeadContent,
  GenretracksDiv,
  Imagediv
} from './genrepage.styles'
import { useGetSongsbygenreQuery } from '../../store/services/songsApi'
import { getRandomColor } from '../../utils/generatecolor'
import { FaPlay } from "react-icons/fa6";
import TrackCard from '../../components/TrackCard/TrackCard'
import { useDispatch } from 'react-redux'
import { setcurrentPlaylist, setTracks } from '../../store/dataSlice'

function GenrePage() {

  const { genre } = useParams()
  const bgcolor = getRandomColor()
  const bgCardColor = getRandomColor()
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetSongsbygenreQuery(genre)

  function handleAlbumPlay() {
    dispatch(setcurrentPlaylist(data?.trackList))
  }

  function setPlaylist() {
    dispatch(setcurrentPlaylist(data?.trackList))
  }

  useEffect(() => {
    dispatch(setTracks(data?.trackList))
  }, [data, dispatch])

  return (
    <GenreMain bgcolor={bgcolor}>
      <GenreHead>
        <GenreHeadContent>
          <Imagediv background={bgCardColor}>
            <p>{genre}</p>
          </Imagediv>
          <GenreDetailsDiv>
            <button className='play_button' onClick={handleAlbumPlay}>
              <FaPlay color='black' size={20} />
            </button>
            <GenreDetailsSub>
              <p>{data?.trackList.length} &nbsp;songs</p>
            </GenreDetailsSub>
          </GenreDetailsDiv>
        </GenreHeadContent>
      </GenreHead>
      <GenretracksDiv>
        {data?.trackList.map((track, index) => (
          <TrackCard track={track} index={index} key={track.songid} setPlaylist={setPlaylist} />
        ))}
      </GenretracksDiv>
    </GenreMain>
  )
}

export default GenrePage

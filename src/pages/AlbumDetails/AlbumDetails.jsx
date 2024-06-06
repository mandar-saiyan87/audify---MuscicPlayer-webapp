import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { useGetSongsbyalbumQuery } from '../../store/services/songsApi'
import { setTracks, setcurrentPlaylist } from '../../store/dataSlice'
import { getRandomColor } from '../../utils/generatecolor'
import { FaPlay } from "react-icons/fa6";
import {
  AlbumMain,
  AlbumHead,
  AlbumHeadContent,
  Imagediv,
  AlbumDetailsDiv,
  AlbumDetailsSub,
  AlbumtracksDiv
} from './albumdetails.styles'
import TrackCard from '../../components/TrackCard/TrackCard'

function AlbumDetails() {

  const bgcolor = getRandomColor()

  const albumId = useParams()
  const { state } = useLocation()


  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetSongsbyalbumQuery(albumId.albumid)

  const year = new Date(state.releasedate).getFullYear()

  function handleAlbumPlay() {
    dispatch(setcurrentPlaylist(data?.trackList))
  }

  useEffect(() => {
    dispatch(setTracks(data?.trackList))
  }, [data, dispatch])

  return (
    <AlbumMain bgcolor={bgcolor}>
      <AlbumHead>
        <AlbumHeadContent>
          <Imagediv>
            <img src={state.imageurl} alt="album_img" className='album_details_image' />
          </Imagediv>
          <AlbumDetailsDiv>
            <button className='play_button' onClick={handleAlbumPlay}>
              <FaPlay color='black' size={20} />
            </button>
            <p>{state.title}</p>
            <AlbumDetailsSub>
              <p>{state.artistname}</p>
              <p className='seperator'></p>
              <p>{year}</p>
              <p className='seperator'></p>
              <p>{data?.trackList.length} &nbsp;songs</p>
            </AlbumDetailsSub>
          </AlbumDetailsDiv>
        </AlbumHeadContent>
      </AlbumHead>
      <AlbumtracksDiv>
        {data?.trackList.map((track, index) => (
          <TrackCard track={track} index={index} key={track.songid} />
        ))}
      </AlbumtracksDiv>
    </AlbumMain>
  )
}

export default AlbumDetails

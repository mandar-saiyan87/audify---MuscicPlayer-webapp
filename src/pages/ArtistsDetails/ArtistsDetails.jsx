import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  ArtistMain,
  ArtistHead,
  ArtistHeadContent,
  Imagediv,
  ArtistDetailsDiv,
  ArtistDetailsSub,
  ArtisttracksDiv
} from './artistsdetails.styles'
import { getRandomColor } from '../../utils/generatecolor'
import { FaPlay } from "react-icons/fa6";
import { useGetSongsbyartistQuery } from '../../store/services/songsApi'
import { setcurrentPlaylist, setTracks } from '../../store/dataSlice'
import TrackCard from '../../components/TrackCard/TrackCard'

function ArtistsDetails() {

  const isLoggedIn = useSelector((state) => state.user.loggedinUser)
  const navigate = useNavigate()

  const { state } = useLocation()
  const dispatch = useDispatch()

  const bgcolor = getRandomColor()

  const { data, error, isLoading } = useGetSongsbyartistQuery(state.artistid)

  function handleTracksPlay() {
    if (!isLoggedIn) {
      navigate('/login')
    }
    dispatch(setcurrentPlaylist(data?.trackList))
  }

  function setPlaylist() {
    dispatch(setcurrentPlaylist(data?.trackList))
  }

  useEffect(() => {
    dispatch(setTracks(data?.trackList))
  }, [data, dispatch])

  // console.log(data?.trackList)

  return (
    <ArtistMain bgcolor={bgcolor}>
      <ArtistHead>
        <ArtistHeadContent>
          <Imagediv>
            <img src={state.imageurl} alt="artist_img" className='album_details_image' />
          </Imagediv>
          <ArtistDetailsDiv>
            <button className='play_button' onClick={handleTracksPlay}>
              <FaPlay color='black' size={20} />
            </button>
            <p>{state.name}</p>
            <p className='bio'>{state.bio}</p>
            <ArtistDetailsSub>
              <p>{data?.trackList.length} &nbsp;songs</p>
            </ArtistDetailsSub>
          </ArtistDetailsDiv>
        </ArtistHeadContent>
      </ArtistHead>
      <ArtisttracksDiv>
        {data?.trackList.map((track, index) => (
          <TrackCard track={track} index={index} key={track.songid} setPlaylist={setPlaylist} />
        ))}
      </ArtisttracksDiv>
    </ArtistMain>
  )
}

export default ArtistsDetails

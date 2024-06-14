import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomColor } from '../../utils/generatecolor'
import {
  DiscoverMain,
  DiscoverDetailsSub,
  DiscoverDetailsDiv,
  DiscoverHead,
  DiscoverHeadContent,
  DiscovertracksDiv,
  Imagediv
} from './discovercategory.styles'
import { FaPlay } from "react-icons/fa6";
import { useGetSongsbycategoryQuery } from '../../store/services/songsApi'
import TrackCard from '../../components/TrackCard/TrackCard'
import { setcurrentPlaylist, setTracks } from '../../store/dataSlice'


function DiscoverCategory() {

  const isLogedIn = useSelector((state) => state.appdata.loggedIn)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const bgcolor = getRandomColor()

  const { state } = useLocation()
  const { data, error, isLoading } = useGetSongsbycategoryQuery(state.name)

  function handleAlbumPlay() {
    if (!isLogedIn) {
      navigate('/login')
    } else {
      dispatch(setcurrentPlaylist(data?.trackList))
    }
  }

  function setPlaylist() {
    dispatch(setcurrentPlaylist(data?.trackList))
  }

  useEffect(() => {
    dispatch(setTracks(data?.trackList))
  }, [data, dispatch])

  return (
    <DiscoverMain bgcolor={bgcolor}>
      <DiscoverHead>
        <DiscoverHeadContent>
          <Imagediv background={state.color}>
            <p>{state.name}</p>
          </Imagediv>
          <DiscoverDetailsDiv>
            <button className='play_button' onClick={handleAlbumPlay}>
              <FaPlay color='black' size={20} />
            </button>
            <DiscoverDetailsSub>
              <p>{data?.trackList.length} &nbsp;songs</p>
            </DiscoverDetailsSub>
          </DiscoverDetailsDiv>
        </DiscoverHeadContent>
      </DiscoverHead>
      <DiscovertracksDiv>
        {data?.trackList.map((track, index) => (
          <TrackCard track={track} index={index} key={track.songid} setPlaylist={setPlaylist} />
        ))}
      </DiscovertracksDiv>
    </DiscoverMain>
  )
}

export default DiscoverCategory
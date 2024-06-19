import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TracksPageMain, TrackContainer, CardContainer } from './tracks.styles'
import { useGetsongsQuery } from '../../store/services/songsApi'
import TopTracksCard from '../../components/TopTracksCard/TopTracks'
import { setTracks, setcurrentPlaylist } from '../../store/dataSlice'

function Tracks() {

  const { data, error, isLoading } = useGetsongsQuery()

  const isLogedIn = useSelector((state) => state.user.loggedinUser)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTracks(data?.trackList))
    if (isLogedIn) {
      dispatch(setcurrentPlaylist(data?.trackList))
    }
  }, [data, dispatch])


  return (
    <TracksPageMain>
      <p className='page_head_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo delectus architecto voluptatem nihil beatae placeat,
        ipsum repellat ipsa aspernatur voluptas amet. Laudantium distinctio aliquam fugiat placeat officia necessitatibus.</p>
      <TrackContainer>
        {data?.trackList.map((track) => (
          <CardContainer key={track.songid}>
            <TopTracksCard carddetails={track} />
          </CardContainer>
        ))}
      </TrackContainer>
    </TracksPageMain>
  )
}

export default Tracks

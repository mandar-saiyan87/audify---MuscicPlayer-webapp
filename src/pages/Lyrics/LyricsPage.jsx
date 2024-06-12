import React from 'react'
import { useSelector } from 'react-redux'
import { getRandomColor } from '../../utils/generatecolor'
import { LyricsMain } from './lyricapage.styles'

function LyricsPage() {

  const bgColor = getRandomColor()
  const getCurrentPlaylist = useSelector((state) => state.appdata.currentPlaylist)
  const getCurrentTrack = useSelector((state) => state.appdata.currentTrackIndex)

  const lyrics = getCurrentPlaylist[getCurrentTrack]?.lyrics

  return (
    <LyricsMain bgcolor={bgColor}>
      {!lyrics ?
        <div>Oops, we don't have lyrics</div> :
        <div dangerouslySetInnerHTML={{ __html: lyrics }}></div>
      }
    </LyricsMain>
  )
}

export default LyricsPage
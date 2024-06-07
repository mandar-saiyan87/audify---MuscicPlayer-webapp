import React, { useRef, useState } from 'react'
import {
  AudioPlayerMain,
  AudioPlayerComponent,
  AudioPalyer,
  PlayerButtonsComponent,
  SeekBarComponent,
  SeekBarDuration,
  SongDetails
} from './audioplayer.styles'
import { useDispatch, useSelector } from 'react-redux'
import { clearPlayer, setCurrentTrackIndex } from '../../store/dataSlice'
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { formatTime } from '../../utils/formatDuration';

function AudioPlayer() {

  const dispatch = useDispatch()

  const currentTracks = useSelector((state) => state.appdata.currentPlaylist)
  // const currentTrackIndex = useSelector((state) => state.appdata.currentTrackIndex)
  // console.log(currentTracks) 
  const audioRef = useRef(null)
  // const [trackIndex, setTrackIndex] = useState(0)
  const trackIndex = useSelector((state) => state.appdata.currentTrackIndex)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime)
  }

  function handleMetadata() {
    setDuration(audioRef.current.duration)
  }

  function handleSeek(e) {
    const audio = audioRef.current
    audio.currentTime = e.target.value
    setCurrentTime(audio.currentTime)
  }

  function playpause() {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  function playNext() {
    const next = (trackIndex + 1) % currentTracks.length
    dispatch(setCurrentTrackIndex(next))
    setIsPlaying(false)
  }

  function playPrev() {
    const previous = (trackIndex - 1 + currentTracks.length) % currentTracks.length
    dispatch(setCurrentTrackIndex(previous))
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsPlaying(false);
  };

  // console.log(currentTracks[trackIndex]?.mp3url)


  return (
    <AudioPlayerMain>
      <button className='close_button' onClick={() => dispatch(clearPlayer())}>
        <p>x</p>
      </button>
      <AudioPlayerComponent>
        <SongDetails>

        </SongDetails>
        <AudioPalyer>
          <audio
            ref={audioRef}
            src={currentTracks[trackIndex]?.mp3url}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleMetadata}
            onEnded={handleEnded}
          >
          </audio>
          <SeekBarComponent>
            <input type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className='seekbar'
            />
            <SeekBarDuration>
              <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
            </SeekBarDuration>
          </SeekBarComponent>
          <PlayerButtonsComponent>
            <button className='player_controls' onClick={playPrev}><FaStepBackward /></button>
            <button className='player_controls' onClick={playpause}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
            <button className='player_controls' onClick={playNext}><FaStepForward /></button>
          </PlayerButtonsComponent>
        </AudioPalyer>
      </AudioPlayerComponent>
    </AudioPlayerMain>
  )
}

export default AudioPlayer

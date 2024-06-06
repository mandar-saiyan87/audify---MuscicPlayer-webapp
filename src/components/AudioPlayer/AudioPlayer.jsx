import React, { useRef, useState } from 'react'
import {
  AudioPlayerMain,
  AudioPlayerComponent,
  AudioPalyer,
  PlayerButtonsComponent,
  SeekBarComponent,
  SeekBarDuration
} from './audioplayer.styles'
import { useDispatch, useSelector } from 'react-redux'
import { clearPlayer } from '../../store/dataSlice'
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

function AudioPlayer() {

  const dispatch = useDispatch()

  const currentTracks = useSelector((state) => state.appdata.currentPlaylist)
  // console.log(currentTracks) 
  const audioRef = useRef(null)
  const [trackIndex, setTrackIndex] = useState(0)
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

  console.log(currentTracks[trackIndex]?.mp3url)

  const trackUrl = currentTracks[trackIndex]?.mp3url || '';

  return (
    <AudioPlayerMain>
      <button className='close_button' onClick={() => dispatch(clearPlayer())}>
        <p>x</p>
      </button>
      <AudioPlayerComponent>
        <AudioPalyer>
          <audio
            ref={audioRef}
            src={`https://drive.google.com/file/d/1PjhJWdT9hdQwTTR2U0QKEMZZx6Xw6pq5/view?usp=sharing`}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleMetadata}
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
              <span>{currentTime.toFixed(2)}</span> / <span>{duration.toFixed(2)}</span>
            </SeekBarDuration>
          </SeekBarComponent>
          <PlayerButtonsComponent>
            <button className='player_controls'><FaStepBackward /></button>
            <button className='player_controls' onClick={playpause}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
            <button className='player_controls'><FaStepForward /></button>
          </PlayerButtonsComponent>
        </AudioPalyer>
      </AudioPlayerComponent>
    </AudioPlayerMain>
  )
}

export default AudioPlayer

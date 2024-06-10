import React, { useRef, useState } from 'react'
import {
  AudioPlayerMain,
  AudioPlayerComponent,
  Player,
  PlayerButtonsComponent,
  SeekBarComponent,
  SeekBarDuration,
  SongDetails,
  ImgaeDiv,
  SongText
} from './audioplayer.styles'
import { useDispatch, useSelector } from 'react-redux'
import { clearPlayer, setCurrentTrackIndex, setcurrentPlaylist } from '../../store/dataSlice'
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { formatTime } from '../../utils/formatDuration';

function AudioPlayer() {

  const dispatch = useDispatch()

  const currentTracks = useSelector((state) => state.appdata.currentPlaylist)
  const allTracks = useSelector((state) => state.appdata.tracks);
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
    const nextIndex = (trackIndex + 1) % currentTracks.length
    if (nextIndex === 0 && currentTracks.length < allTracks.length) {
      dispatch(setcurrentPlaylist(allTracks));
      dispatch(setCurrentTrackIndex(0));
    } else {
      dispatch(setCurrentTrackIndex(nextIndex));
    }
    setIsPlaying(false)
  }

  function playPrev() {
    if (trackIndex === 0 && currentTracks.length < allTracks.length) {
      dispatch(setcurrentPlaylist(allTracks));
      dispatch(setCurrentTrackIndex(allTracks.length - 1));
    } else {
      const prevIndex = (trackIndex - 1 + currentTracks.length) % currentTracks.length;
      dispatch(setCurrentTrackIndex(prevIndex));
    }
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
          <ImgaeDiv>
            <img src={currentTracks[trackIndex].imageurl} alt="track_image" className='player_track_image'/>
          </ImgaeDiv>
          <SongText>
            <p className='track_title'>{currentTracks[trackIndex].title}</p>
            <p className='track_artist'>{currentTracks[trackIndex].artistname}</p>
          </SongText>
        </SongDetails>
        <Player>
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
        </Player>
      </AudioPlayerComponent>
    </AudioPlayerMain>
  )
}

export default AudioPlayer

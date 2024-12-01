import * as React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';

export const AudioPlayer = () => {
  const audioRef = React.useRef<any>(null)

  const [isPlaying, setIsPlaying] = React.useState(false)

  const handleTogglePlay = () => {
    const audio = document.getElementsByClassName('react-audio-player')[0] as HTMLAudioElement
    if (audio) {
      if (audio.paused) {
        audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    }
  }


  return (
    <div
      style={{
        zIndex: 9999,
        position: "fixed",
        bottom: 0,
        right: 0,
        width: 60,
      }}
    >
      <div style={{
        background: "white",
        borderRadius: "50%",
        cursor: "pointer",
        padding: 8,
        width: 48,
        height: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
        className={`audio-player ${isPlaying ? 'playing' : ''}`}
        role="button"
        onClick={handleTogglePlay}
      >
        {isPlaying ? (
          <PauseIcon />
        ) : (
          <PlayIcon />
        )}
      </div>
      <div style={{
        opacity: 0,
      }}>
        <ReactAudioPlayer
          ref={audioRef}
          id="audio"
          src="/wedding/music/sound.mp3"
          autoPlay
          controls
          loop
        />
      </div>

    </div>
  )
}

export default AudioPlayer
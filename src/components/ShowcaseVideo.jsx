import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import videoGps from '../assets/video_gps.mp4'

function ShowcaseVideo() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTime = () => setCurrentTime(v.currentTime)
    const onLoaded = () => setDuration(v.duration || 0)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('loadedmetadata', onLoaded)
    // apply initial audio preferences
    try {
      v.volume = 0.5
      v.muted = false
    } catch {}
    // try to autoplay with sound (may be blocked by browser policies)
    const playPromise = v.play?.()
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => setIsPlaying(false))
    }
    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('loadedmetadata', onLoaded)
    }
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const handleSeek = (e) => {
    const v = videoRef.current
    if (!v) return
    const value = Number(e.target.value)
    v.currentTime = value
    setCurrentTime(value)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const changeVolume = (e) => {
    const v = videoRef.current
    if (!v) return
    const value = Number(e.target.value)
    v.volume = value
    setVolume(value)
    if (value > 0 && v.muted) {
      v.muted = false
      setMuted(false)
    }
  }

  const formatTime = (t) => {
    if (!Number.isFinite(t)) return '0:00'
    const mins = Math.floor(t / 60)
    const secs = Math.floor(t % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="section video-showcase">
      <div className="video-band" aria-hidden />
      <div className="container">
        <motion.div
          className="video-stage"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="video-frame"
            whileHover={{ scale: 1.01, rotateX: -1.2, rotateY: 1.2 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            onClick={togglePlay}
          >
            <motion.video
              ref={videoRef}
              className="video-clip"
              src={videoGps}
              autoPlay
              muted={muted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
              // volume must be set via JS API; managed in effects/handlers
            />

            {!isPlaying && (
              <div className="video-overlay" aria-hidden>
                <span className="overlay-icon">▶</span>
                <span className="overlay-text">REPRODUCIR</span>
              </div>
            )}

            <div className="video-controls" onClick={(e) => e.stopPropagation()}>
              <button className="control-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
                {isPlaying ? '❚❚' : '▶'}
              </button>
              <span className="time">{formatTime(currentTime)}</span>
              <input
                className="seek"
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={handleSeek}
              />
              <span className="time">{formatTime(duration)}</span>
              <button className="control-btn" onClick={toggleMute} aria-label={muted ? 'Activar sonido' : 'Silenciar'}>
                {muted ? '🔇' : '🔊'}
              </button>
              <input
                className="volume"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={changeVolume}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ShowcaseVideo



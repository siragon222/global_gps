import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import videoGps from '../assets/video_gps.mp4';

function ShowcaseVideo() {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  // Detectar interacción del usuario
  const handleUserInteraction = useCallback(() => {
    setHasUserInteracted(true);
    document.removeEventListener('click', handleUserInteraction);
    document.removeEventListener('touchstart', handleUserInteraction);
    document.removeEventListener('keydown', handleUserInteraction);
  }, []);

  useEffect(() => {
    // Configurar listeners de interacción
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [handleUserInteraction]);

  // Manejar la reproducción del video
  const handlePlay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Error al reproducir:', e));
      setHasUserInteracted(true);
      setShowPlayButton(false);
    }
  }, []);

  // Observer para detectar visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          if (hasUserInteracted) {
            handlePlay();
          } else {
            setShowPlayButton(true);
            videoRef.current?.pause();
          }
        } else {
          videoRef.current?.pause();
          if (!hasUserInteracted) {
            setShowPlayButton(false);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [hasUserInteracted, handlePlay]);

  return (
    <section className="section video-showcase" ref={videoContainerRef}>
      <div className="video-band" aria-hidden />
      <div className="container">
        <motion.div
          className="video-stage"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="video-frame">
            <motion.video
              ref={videoRef}
              className="video-clip"
              src={videoGps}
              muted={!hasUserInteracted}
              loop
              playsInline
            />
            {showPlayButton && (
              <div className="video-overlay" onClick={handlePlay}>
                <div className="overlay-icon">▶</div>
                <div className="overlay-text">Reproducir</div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ShowcaseVideo;



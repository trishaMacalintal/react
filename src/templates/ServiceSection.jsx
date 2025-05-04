import React, { useState, useRef, useEffect } from "react";
import ServiceCards from "../components/ServiceCards";
import services from "../data/services.js";

function ServiceSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const controlTimerRef = useRef(null);
  
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true); 
      } else {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
            startControlsTimer();
          })
          .catch(error => {
            console.error("Error playing video:", error);
          });
      }
      
      if (overlayRef.current) {
        overlayRef.current.style.opacity = isPlaying ? '1' : '0';
      }
    }
  };
  
  const handleVideoInteraction = () => {
    if (isPlaying) {
      setShowControls(true);
      startControlsTimer();
    }
  };
  
  const startControlsTimer = () => {

    if (controlTimerRef.current) {
      clearTimeout(controlTimerRef.current);
    }
    
    controlTimerRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };
  
  useEffect(() => {
    return () => {
      if (controlTimerRef.current) {
        clearTimeout(controlTimerRef.current);
      }
    };
  }, []);
  
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(true);
    if (overlayRef.current) {
      overlayRef.current.style.opacity = '0'; 
    }
  };

  return (
    <section className="experience position-relative overflow-hidden" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className={`position-relative z-1 text-center mb-8 mb-lg-9 ${isPlaying ? 'video-player-playing' : 'video-player-paused'}`}
              onMouseMove={handleVideoInteraction}
              onTouchStart={handleVideoInteraction}
            >
              <video
                ref={videoRef}
                className="w-100 h-100 rounded-4"
                src="assets/video/Tech_video.mp4"
                poster="assets/img/Hero/experiences.webp"
                type="video/mp4"
                onEnded={handleVideoEnd}
                onClick={handlePlayPause}
              />
              
              <button
                className={`btn position-absolute translate-middle top-50 start-50 justify-content-center align-items-center bg-white rounded-circle cursor-pointer ${showControls ? 'visible' : 'invisible'}`}
                onClick={handlePlayPause}
                style={{ 
                  transition: 'opacity 0.3s ease', 
                  opacity: showControls ? 1 : 0,
                  width: '80px',
                  height: '80px',
                  display: 'flex'
                }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF5A5F" stroke="#FF5A5F" strokeWidth="2">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF5A5F" stroke="#FF5A5F" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
              
              <div className="position-absolute dots d-none d-sm-block">
                <img
                  className="img-fluid w-100"
                  src="assets/img/illustrations/Dots.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-7">
            <h2 className="fs-4 fs-lg-3 fw-bold text-center text-white mb-5 mb-lg-9 lh-sm">
              We made this app to solve your problems.
            </h2>
          </div>
          <div className="col-12">
            <div className="row gy-4 g-md-3 pb-8 pb-lg-11 px-1">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"
                >
                  <ServiceCards
                    src={service.img}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 start-0 end-0">
        <div className="bg-white py-3 py-md-9 py-xl-10"> </div>
        <img className="wave" src="assets/img/illustrations/Wave_2.svg" alt="" />
      </div>
    </section>
  );
}

export default ServiceSection;
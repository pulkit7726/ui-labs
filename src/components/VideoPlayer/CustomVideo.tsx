import React, { useRef, useState, useEffect } from "react";
import "./UseVideoPlayer.css";
import UseVideoPlayer from "./UseVideoPlayer";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import screenfull from 'screenfull';
import { Range } from 'react-range';
import ReactPlayer from 'react-player'

  const CustomVideo = (props) => {
  const videoElement = useRef(null);
  const playContainerRef = useRef(null);
  var colorRange= props.rangeColor
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleOnEndVideo,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = UseVideoPlayer(videoElement);
  const [screen, setScreen] = useState({});

  const onToggleFullScreen = () => {
    if (screenfull.isFullscreen) {
      setScreen({});
      screenfull.exit();
    } else {
      setScreen({
        width: '100%',
        height: '100%'
      });
      screenfull.toggle(playContainerRef.current!);
    }
  }

  return (
    <div className="container">
      <div ref={playContainerRef} className="video-wrapper">
        <ReactPlayer
          onPlay={togglePlay}
          onPause={togglePlay}
          url={props.url}
          ref={videoElement}
          onProgress={ (e) => handleOnTimeUpdate(e)}
          playing={playerState.isPlaying}
          muted={playerState.isMuted}
          playbackRate={playerState.speed}
          onEnded={handleOnEndVideo}
          {...screen}   
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay} >
              {!playerState.isPlaying ? (
               <PlayArrowIcon style = {{ color: props.iconColor}}/>
              ) : (
                <PauseIcon style = {{ color: props.iconColor}} />
              )}
            </button>
          </div>
           <Range
             step={1}
             min={0}
             max={playerState.totalDurationofVideo}
             values={playerState.progress}
             onChange={(e) => handleVideoProgress(e)}
             renderTrack={({ props, children }) => (
              <div
              {...props}
              style={{
                  ...props.style,
                  height: '6px',
                  width: '70%',
                  background: `linear-gradient(to right, ${colorRange}
                  ${(playerState.progress[0] - 0) * 100 / (playerState.totalDurationofVideo - 0)}%, #ccc 0px`,
              }}
          >
             {children}
            </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              marginTop: '0px',
              height: '13px',
              width: '15px',
              backgroundColor: '#999'
            }}
          />
        )}
      />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <VolumeMuteIcon />
            ) : (
             <VolumeOffIcon />
            )}
          </button>
              <button  
                aria-label='Full Screen'
                title='Full Screen'
                onClick={onToggleFullScreen}
              >
                {Object.keys(screen).length === 0 ?( <FullscreenIcon />) : (<FullscreenExitIcon />) }
              </button>    
        </div>
      </div>
    </div>
  );
};

export default CustomVideo;
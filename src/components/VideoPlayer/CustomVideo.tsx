import React, { useRef } from "react";
import "./useVideoPlayer.css";
import useVideoPlayer from "./useVideoPlayer";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Range } from 'react-range';
import ReactPlayer from 'react-player'

const CustomVideo = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleOnEndVideo,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrapper">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=tf8phrV7Dq0"}
          ref={videoElement}
          onProgress={ (e) => handleOnTimeUpdate(e)}
          playing={playerState.isPlaying}
          muted={playerState.isMuted}
          playbackRate={playerState.speed}
          onEnded={() => {
            handleOnEndVideo();
          }}
          
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
               <PlayArrowIcon />
              ) : (
                <PauseIcon />
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
              backgroundColor: '#ccc',
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
        </div>
      </div>
    </div>
  );
};

export default CustomVideo;
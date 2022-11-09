import React, { useRef, useState, useEffect } from "react";
import "./UseVideoPlayer.css";
import UseVideoPlayer from "./UseVideoPlayer";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FullscreenSharpIcon from '@mui/icons-material/FullscreenSharp';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import screenfull from 'screenfull';
import { Range } from 'react-range';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';

const CustomVideo = (props) => {
  const videoElement = useRef(null);
  const playContainerRef = useRef(null);
  var colorRange = props.rangeColor
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handlePlay,
    handlePause,
    handleOnEndVideo,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = UseVideoPlayer(videoElement);
  const [screen, setScreen] = useState({});
  var rangeColor = props.rangeColor
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
          onPlay={handlePlay}
          onPause={handlePause}
          url={props.url}
          ref={videoElement}
          onProgress={(e) => handleOnTimeUpdate(e)}
          playing={playerState.isPlaying}
          muted={playerState.isMuted}
          playbackRate={playerState.speed}
          onEnded={handleOnEndVideo}
          {...screen}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}
             title= {!playerState.isPlaying ? 'Play' : 'Pause'}
              >
              {!playerState.isPlaying ? (
                <PlayArrowIcon style={{ color: props.iconColor }} />
              ) : (
                <PauseIcon style={{ color: props.iconColor }} />
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
                  background: `linear-gradient(to right, ${(rangeColor)}
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
            style={{
              marginLeft: '10px',
              color: '#92979d'
            }}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn"
           title= {!playerState.isMuted ? 'Mute' : 'Unmute'}
            onClick={toggleMute}>
            {!playerState.isMuted ? (
              <VolumeMuteIcon style={{ color: props.iconColor }} />
            ) : (
              <VolumeOffIcon style={{ color: props.iconColor }} />
            )}
          </button>
          <Button
            variant="text"
            aria-label='Full Screen'
            title= {Object.keys(screen).length === 0 ? 'Full Screen' : 'Exit Full Screen'}
            onClick={onToggleFullScreen}
            style={{
              width: '0px',
              marginLeft: '-12px',
              minWidth: '34px',
            }}
          >
            {Object.keys(screen).length === 0 ?
              (<FullscreenSharpIcon style={{ color: props.iconColor }} />) :
              (<FullscreenExitIcon style={{ color: props.iconColor }} />)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideo;
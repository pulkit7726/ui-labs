import { useState, useEffect } from "react";

const UseVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: [0],
    speed: 1,
    totalDurationofVideo : 1,
    isMuted: false,
  });

  const togglePlay = () => {
    videoElement.current.loop = false;
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
      totalDurationofVideo : playerState.totalDurationofVideo===1 ? videoElement.current.getDuration() : playerState.totalDurationofVideo, 
    });
  };


  useEffect(() => {
    playerState.isPlaying
      ? true
      : false;
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = (e) => {
    const progress =[e.playedSeconds ];
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handlePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: true,
      totalDurationofVideo : playerState.totalDurationofVideo===1 ? videoElement.current.getDuration() : playerState.totalDurationofVideo, 
    });
  };

  const handlePause = () => {
    setPlayerState({
      ...playerState,
      isPlaying: false,
    });
  };

  const handleOnEndVideo = () => {
    setPlayerState({
      ...playerState,
      isPlaying:false,
    });
  };

  const handleVideoProgress = (event) => {
    setPlayerState({
      ...playerState,
      progress: event,
    });
    videoElement.current.seekTo(event);
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? true
      : false;
  }, [playerState.isMuted, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleOnEndVideo,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    handlePlay,
    handlePause,
  };
};
export default UseVideoPlayer;
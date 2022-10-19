import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: [0],
    speed: 1,
    totalDurationofVideo : 1,
    isMuted: false,
  });

  const togglePlay = () => {
    videoElement.current.loop = false;
    let totalDurationofVideo : any;  
    if(playerState.totalDurationofVideo===1 || playerState.totalDurationofVideo=== videoElement.current.getDuration()){
    totalDurationofVideo= videoElement.current.getDuration()
   }

    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
      totalDurationofVideo,
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
  };
};

export default useVideoPlayer;
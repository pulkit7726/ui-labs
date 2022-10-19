import React,  {useState, useRef} from 'react';
import "./useVideoPlayer.css";
import CustomVideo from "./CustomVideo"; 
import ReactPlayer from 'react-player'
import "./useVideoPlayer.css";

type VideoPlayerProps = {
  openCustomVideo: boolean;

};
export  function VideoPlayerComponent({
  openCustomVideo
}: VideoPlayerProps) {

 return (
  <div >
      {!openCustomVideo && (     
        <> <h2>{"Video Player with Default Controllers"}</h2>
            <div className="container">
            <div className="video-wrapper">
       <ReactPlayer url={"https://www.youtube.com/watch?v=tf8phrV7Dq0"}
       config={{
        youtube: {
          playerVars: { showinfo: 1 }
        }
      }}
       playing={true}
       controls
       >
       </ReactPlayer>
       </div>
      </div>
      </>) }

      {openCustomVideo && (      <>
        <h2>{"Video Player with Custom Controllers"}</h2>
       <CustomVideo  />
      </>) }

  </div>
 );
}
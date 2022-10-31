import React,  {useState, useRef} from 'react';
import "./UseVideoPlayer.css";
import CustomVideo from "./CustomVideo"; 
import ReactPlayer from 'react-player'
import { Typography } from '@mui/material';

type VideoPlayerProps = {
  customControls: boolean;
  url:string

};
export  function VideoPlayerComponent({
  customControls,
  url,
}: VideoPlayerProps) {

 return (
  <div >
     {!customControls && (
        <>
            <Typography>{"Video Player with Default Controllers"}</Typography>
            <div className="container">
                <div className="video-wrapper">
                    <ReactPlayer url={url}
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
        </>
      )
    }

   {customControls && (
        <>
            <Typography>{"Video Player with Custom Controllers"}</Typography>
            <CustomVideo url={url} />
        </>
      )
   }
  </div>
 );
}
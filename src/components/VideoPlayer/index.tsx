import React,  {useState} from 'react';
import VideoPlayer from 'react-video-js-player';
import { makeStyles } from '@mui/styles';
import { DialogContent, Dialog} from '@material-ui/core';
import CancelIcon from '@mui/icons-material/Cancel';

type VideoPlayerProps = {
  open: boolean;
  VideoPath : string;

};
export  function VideoPlayerComponent({
  open,
  VideoPath
}: VideoPlayerProps) {
  
const useStyles = makeStyles({
    videoStyling :{
      marginLeft: "400px",
      marginTop:"100px",
      width:"300px",
      height:"180px",
    },
  });

const classes = useStyles();
const[videoViewer,setVideoViewer]= useState(false);

const handleVideoClose = () => {
  setVideoViewer(false);
};

 return (
  <div>
  {open &&
    (  <div>
      <h1>Video Player</h1>
      <VideoPlayer
      className={classes.videoStyling}
      src= {VideoPath}      
      />      
      </div>
    )
  }
{!open &&
    ( 
      <>
      <h1>Video Player in Dialog Box</h1>
      <video
      className={classes.videoStyling}
      src= {VideoPath}
      onClick ={()=>
       setVideoViewer(true)
      }
      />
      </>
      )
}
       <Dialog
       open={videoViewer}
       id={'view-video'}
       fullWidth={false}
       maxWidth={'lg'}
       title={"Video Player"}
       onClose={handleVideoClose}
      >
      <CancelIcon onClick={() =>handleVideoClose()}></CancelIcon>
       <DialogContent>
             <video
               controls
               autoPlay={true}
               preload='auto'
               height='500px'
               width='700px'
             >
               <source src={VideoPath} type='video/mp4' />
             </video>
       </DialogContent>
     </Dialog>    
  </div>
 );
}
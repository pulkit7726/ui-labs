import React,{useState} from 'react';
// import config from "./Config/ChatBotConfig";
import {MessageParser} from "./Config/MessageParser";
import ActionProvider from "./Config/ActionProvider";
import { makeStyles } from '@mui/styles';
import TypedReact from './Widgets/TypedReact';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

const useStyles = makeStyles({
 AppChatbotContainer: {
  margin: "40px 0",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  left: "40px",
  bottom: "55px",
  zIndex: 9999,
  boxShadow: "5px 5px 13px rgba(91, 81, 81, 0.4)",
  borderRadius: "5px",
},
AppChatbotButton :{
  width: "60px",
  height: "60px",
  borderRadius: "100%",
  padding: "10px",
  color: "#fff",
  backgroundColor: "#0d2d44",
  border: "none",
  position: "fixed",
  bottom: "25px",
  zIndex: 9999,
  left: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.6s ease-in-out",
  '&:hover':{
    transform: "scale(1.1)"
  }
},
AppChatbotButtonIcon :{
  fill: "#fff",
  width:"40px"
},
AppChatbotButtonTitle:{
  marginTop:"0.2rem",
  marginBottom:"0.2rem"
}
});

type ChatBotProps = {
  title:string,
  config:any,
  onLoadMessage:any
}
function ChatBot({title,config,onLoadMessage}:ChatBotProps) {

    const [showBot, toggleBot] = useState(false);
    const classes = useStyles();
    console.log(title,onLoadMessage)
  return (
    <div>
      <TypedReact onLoadMessage={onLoadMessage}/>
        {showBot && (
          <div className={classes.AppChatbotContainer}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
      )}
        <button
          className={classes.AppChatbotButton}
          onClick={() => toggleBot((prev) => !prev)}
        >
          <div className={classes.AppChatbotButtonTitle}>{title}</div>
          <svg viewBox="0 0 640 512" className={classes.AppChatbotButtonIcon}>
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
          </svg>
        </button>
    </div>
  )
}

export default ChatBot;
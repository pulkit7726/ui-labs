import TransitionModal from "./TransitionModal";
import SimpleModal from "./SimpleModal";
import ModalProps from './ModalInterface'
import React from "react";

const Modal = ({...props}: ModalProps) => {
  return(
    <>
     {
      props.transition ? <TransitionModal {...props}/> : <SimpleModal {...props}/>
     }
    </>
  )
}
export default Modal;
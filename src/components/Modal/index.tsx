import React, { ReactElement } from "react";
import { Dialog, Collapse, Fade, Grow, Slide, Zoom, Box } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { styled } from '@mui/material/styles';
import ModalProps from "./ModalInterface";
import Header from './Header';
import Footer from "./Footer";
import ModalBody from "./ModalBody";

const CssDialog = styled(Dialog)`
 & .MuiDialog-paper {
  fontSize: 1rem,
  '@media (min-width:600px)': {
    fontSize: 1.5rem,
  }
  font-family: sans-serif;
  -webkit-transition: box-sha
 }`;

const Modal = ({
  headerTitle,
  footerContent,
  onClose,
  headerBackground,
  footerBackground,
  children,
  keepMounted,
  show,
  background,
  width,
  height,
  fullScreen,
  transition,
  transitionDuration
}: ModalProps) => {

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <>
      {transition === 'collapse' ? (
        <Collapse in={true} style={{ transformOrigin: '0 0 0' }} {...(transitionDuration ? { timeout: transitionDuration } : {})} ref={ref} {...props} />
      ) : transition === 'grow' ? (
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(transitionDuration ? { timeout: transitionDuration } : {})} ref={ref} {...props} />
      ) : transition === 'slide' ? (
        <Slide in={true} direction="up" ref={ref} {...(transitionDuration ? { timeout: transitionDuration } : {})} {...props} />
      ) : transition === 'zoom' ? (
        <Zoom in={true} style={{ transformOrigin: '0 0 0' }} {...(transitionDuration ? { timeout: transitionDuration } : {})} ref={ref} {...props} />
      ) : <Fade in={true} style={{ transformOrigin: '0 0 0' }} {...(transitionDuration ? { timeout: transitionDuration } : {})} ref={ref} {...props} />}
    </>
  });

  return (<>
    {Boolean((keepMounted || show)) && (
      <CssDialog
        open={Boolean((keepMounted || show))}
        fullScreen={fullScreen ? true : false}
        onClose={onClose}
        data-testid="CssDialog-fullScreen"
        className="CssDialog"
        aria-labelledby="customized-dialog-title"
        TransitionComponent={Transition}
        style={{ width, height }}>

        {/* Header */}

        {(headerTitle) && (
          <Header
            onClose={onClose}
            headerTitle={headerTitle}
            keepMounted={keepMounted}
            width={width}
            headerBackground={headerBackground}
          />
        )}

        {/* Body */}

        <>
          {(keepMounted || show || fullScreen) && (
            <ModalBody
              background={background}
              width={width}
              height={height}
              children={children}
            />
          )}
        </>

        {/* Footer */}

        {footerContent && <Footer footerContent={footerContent} footerBackground={footerBackground} width={width} />}

      </CssDialog>
    )}

  </>
  )
}

export default Modal;

import React, { ReactElement } from "react";
import {
  Typography,
  Paper,
  Box,
  Collapse,
  Fade,
  Grow,
  Slide,
  Zoom,
  Dialog, 
  DialogTitle, 
  DialogContent
} from '@mui/material';
import { styled } from "@storybook/theming";
import ModalProps from "./ModalInterface";

const CssDialog = styled(Dialog)`
 & .MuiDialog-paper {
  fontSize: 1rem,
  '@media (min-width:600px)': {
    fontSize: 1.5rem,
  }
  font-family: sans-serif;
  -webkit-transition: box-sha
 }

`;


const TransitionModal = ({
  title,
  children,
  footer,
  onClose,
  background,
  width,
  height,
  transition,
  transitionContent
}: ModalProps) => {

  const ModalContent = (modalType: string) => {
    return (
      <Box style={{ background, width, height }}>
        <DialogContent
          className="CssDialog-content"
          data-testid="test-content"
          onClick={e => e.stopPropagation()}
        >
          <DialogTitle
            className="CssDialog-title"
            data-testid="test-title"
          >
            <b>{title}</b>
          </DialogTitle>
          <DialogContent
            dividers style={{ background, width, height }}
            className="CssDialog-body"
            data-testid="test-body" >
            <Typography
              className="CssDialog-typography"
              data-testid="test-typography"
              variant="subtitle1"
            >
              {children}
            </Typography>
          </DialogContent>
          {footer && <div className="CssDialog-footer" data-testid="test-footer" >{footer}</div>}
        </DialogContent>
      </Box>
    )
  }

  return (<>
    <CssDialog
      open={Boolean(transitionContent)}
      aria-describedby="alert-dialog-slide-description"
    >
      {transition === 'collapse' ? (
        <Collapse style={{ transformOrigin: '0 0 0' }}
          {...(transitionContent ? { timeout: 1000 } : {})} in={Boolean(transitionContent)}>
          {ModalContent(transition)}
        </Collapse>
      ) : null}
      {transition === 'fade' ? (
        <Fade style={{ transformOrigin: '0 0 0' }}
          {...(transitionContent ? { timeout: 1000 } : {})} in={Boolean(transitionContent)}>
          {ModalContent(transition)}
        </Fade>
      ) : null}
      {transition === 'grow' ? (
        <Grow style={{ transformOrigin: '0 0 0' }}
          {...(transitionContent ? { timeout: 1000 } : {})} in={Boolean(transitionContent)}>
          {ModalContent(transition)}
        </Grow>
      ) : null}
      {transition === 'slide' ? (
        <Slide style={{ transformOrigin: '0 0 0' }}
          {...(transitionContent ? { timeout: 1000 } : {})} in={Boolean(transitionContent)}>
          {ModalContent(transition)}
        </Slide>
      ) : null}
      {transition === 'zoom' ? (
        <Zoom style={{ transformOrigin: '0 0 0' }}
          {...(transitionContent ? { timeout: 1000 } : {})} in={Boolean(transitionContent)}>
          {ModalContent(transition)}
        </Zoom>
      ) : null}
    </CssDialog>
  </>
  )
}

export default TransitionModal;
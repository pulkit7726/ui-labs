import React, { ReactElement } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Slide,
  Typography,
  Toolbar,
  AppBar,
  Box,
  Grid,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { styled } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
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



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SimpleModal = ({
  mainTitle,
  title,
  footer,
  onClose,
  children,
  keepMounted,
  show,
  background,
  width,
  height,
  fullScreen,
  notificationIcon,
  settingIcon,
  fullscreenIcon,
}: ModalProps) => {

  return (<>

    <CssDialog
      open={Boolean((keepMounted || show))}
      fullScreen={fullScreen ? true : false}
      onClose={onClose}
      data-testid="CssDialog-fullScreen"
      className="CssDialog"
      aria-labelledby="customized-dialog-title"
      TransitionComponent={Transition}
      style={{ background, width, height }}>
      <Box sx={{ display: 'flex' }} className="CssDialog-box" data-testid="test-box">
        <AppBar sx={{ position: 'relative' }} className="CssDialog-appbar" data-testid="test-appbar">
          <Toolbar className="CssDialog-toolbar" data-testid="test-toolbar">
            <Grid container justifyContent="space-between" className="CssDialog-grid" data-testid="test-grid">
              <Grid item xs="auto">
                <Tooltip className="CssDialog-tooltip" data-testid="test-tooltip" title="Close">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="close"
                    onClick={onClose}
                    data-testid="test-iconButton"
                    className="CssDialog-iconButton" 
                  >
                    {keepMounted ? (<></>) : (<CloseIcon />)}

                  </IconButton>
                </Tooltip>
                {mainTitle}
              </Grid>

              <Grid
                item xs="auto"
                container
                direction="row"
                spacing={1}
                justifyContent="flex-end"
                alignItems="center">
                {/* <Grid item xs={9}></Grid> */}
                <Grid item xs="auto">
                  <Tooltip title="FullScreen">
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="close"
                    >
                      {(fullscreenIcon) ? (<FullscreenIcon />) : null}
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item xs="auto">
                  <Tooltip title="Notification">
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="close"
                    >
                      {(notificationIcon) ? (<NotificationsNoneIcon />) : null}
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item xs="auto">
                  <Tooltip title="Settings">
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="close"
                    >
                      {(settingIcon) ? (<SettingsIcon />) : null}
                    </IconButton>
                  </Tooltip>
                </Grid>
                {/* </Box> */}
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <>
        {(keepMounted || show || fullScreen) && (
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
            {footer && <div className="CssDialog-footer" data-testid="test-footer" >
              {footer}
            </div>}
          </DialogContent>
        )}
      </>
    </CssDialog>

  </>
  )
}


export default SimpleModal
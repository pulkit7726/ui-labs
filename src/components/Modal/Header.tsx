import React from "react";
import {
  IconButton,
  Toolbar,
  AppBar,
  Grid,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { HeaderProps } from "./ModalInterface";

function Header({
    mainTitle,
    onClose,
    headerBackground,
    keepMounted,
    notificationIcon,
    settingIcon,
    fullscreenIcon,
  }: HeaderProps) {

  return (
    <div style={{width: '100%'}}>
        <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: headerBackground }} className="CssDialog-appbar" data-testid="test-appbar">
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
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;
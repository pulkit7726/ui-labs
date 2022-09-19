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
  headerTitle,
  onClose,
  headerBackground,
  keepMounted,
  notificationIcon,
  settingIcon,
  fullscreenIcon,
}: HeaderProps) {

  return (
    <div style={{ width: '100%' }}>
      <AppBar sx={{ position: 'relative' }} style={{ backgroundColor: headerBackground }} className="CssDialog-appbar" data-testid="test-appbar">
        <Toolbar className="CssDialog-toolbar" data-testid="test-toolbar">
          <Grid container justifyContent="space-between" direction="row" alignItems="center" className="CssDialog-grid" data-testid="test-grid">
            
            <Grid item xs="auto">
              {keepMounted ? (<></>) : (
                <Tooltip className="CssDialog-tooltip" data-testid="test-tooltip" title="Close">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="close"
                    onClick={onClose}
                    data-testid="test-iconButton"
                    className="CssDialog-iconButton"
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              )}
              {headerTitle}
            </Grid>

            <Grid
              item xs="auto"
              container
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              alignItems="center">
              
              {(fullscreenIcon) ? (
              <Grid item xs="auto">
                <Tooltip title="FullScreen">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="close"
                    onClick={() => window.confirm('Fullscreen')}
                  >
                    <FullscreenIcon />
                  </IconButton>
                </Tooltip>
              </Grid>) : null}

              {(notificationIcon) ? (
              <Grid item xs="auto">
                <Tooltip title="Notification">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="close"
                    onClick={() => window.confirm('Notifications')}
                  >
                    <NotificationsNoneIcon />
                  </IconButton>
                </Tooltip>
              </Grid>) : null}

              {(settingIcon) ? (
              <Grid item xs="auto">
                <Tooltip title="Settings">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="close"
                    onClick={() => window.confirm('Settings')}
                  >
                    <SettingsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>) : null}

            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;

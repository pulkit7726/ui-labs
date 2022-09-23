import React from "react";
import {
  IconButton,
  Toolbar,
  Grid,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { HeaderProps } from "./ModalInterface";

function Header({
  headerTitle,
  onClose,
  headerBackground,
  keepMounted,
  width
}: HeaderProps) {

  return (
    <div style={{ width: width && width+50, backgroundColor: headerBackground || '#007ab4' }} data-testid="test-box">
      <div className="CssDialog-appbar" data-testid="test-appbar">
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

            </Grid>

          </Grid>
        </Toolbar>
      </div>
    </div>
  )
}

export default Header;

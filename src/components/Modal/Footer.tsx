import React from "react";
import {
  Toolbar,
  AppBar,
  Grid,
} from '@mui/material';
import { FooterProps } from "./ModalInterface";

function Footer({
    footerContent,
    footerBackground
  }: FooterProps) {

  return (
    <div style={{width: '100%'}}>
        <AppBar sx={{ position: 'relative', backgroundColor: footerBackground }} className="CssDialog-appbar" data-testid="test-appbar">
        <Toolbar className="CssDialog-toolbar" data-testid="test-toolbar">
          <Grid container justifyContent="right" className="CssDialog-grid" data-testid="test-grid">
            {footerContent && <div className="CssDialog-footer" data-testid="test-footer" >
              {footerContent}
            </div>}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer;
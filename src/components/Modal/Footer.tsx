import React from 'react';
import { Toolbar, Grid } from '@mui/material';
import { FooterProps } from './ModalInterface';

function Footer({ footerContent, footerBackground, width }: FooterProps) {
  return (
    <div
      style={{ width: width && width + 50, backgroundColor: footerBackground }}
    >
      <div className="CssDialog-appbar" data-testid="test-appbar">
        <Toolbar className="CssDialog-toolbar" data-testid="test-toolbar">
          <Grid
            container
            justifyContent="right"
            className="CssDialog-grid"
            data-testid="test-grid"
          >
            {footerContent && (
              <div className="CssDialog-footer" data-testid="test-footer">
                {footerContent}
              </div>
            )}
          </Grid>
        </Toolbar>
      </div>
    </div>
  );
}

export default Footer;

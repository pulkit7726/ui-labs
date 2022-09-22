import { DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { ModalBodyProps } from "./ModalInterface";

const ModalBody = ({background, width, height, children}: ModalBodyProps) => (
    <DialogContent
    className="CssDialog-content"
    data-testid="test-content"
    onClick={e => e.stopPropagation()}
    style={{ background, width, height }}
  >
    <DialogContent
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
  </DialogContent>
)

export default ModalBody;

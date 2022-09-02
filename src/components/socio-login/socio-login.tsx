import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Link, makeStyles, TextField, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface GridProps {
  backgroundColor?: string;
  label?: string;
  border?: boolean;
  hover?: boolean;
}

function Socio({ backgroundColor, label, border, hover }: GridProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />
        <img
          src="https://www.zoho.com/branding/images/zoho-logo-512px.png"
          alt="Zoho"
          width="90px"
          height="30px"
        />

        <Typography variant="h5">
          <b>Sign in</b>
        </Typography>
        <Typography  variant="h6">
          <b>to access Zoho Payroll</b>
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          name="Email address or mobile number"
          label="Email address or mobile number"
          type="email mobile number"
          id="email"
          sx={{ mt: 3, mb: 2 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          NEXT
        </Button>
        <Typography component="h6" variant="h6" align="center" color="primary">
          Forgot Password?
        </Typography>
        <Typography style={{fontSize:"18px"}} align="center">
          <div style={{float:"left",width:"44%",opacity:'0.5'}}>
            <hr />
          </div>
          <div style={{float:"right",width:"44%",opacity:'0.5'}}>
            <hr />
          </div>
          Or
        </Typography>
        <br />
        <Typography  variant="h6">
          <b>Sign in using</b>
        </Typography>
        <div >
          <Button onClick={() => alert("Hello")}>
            <img
              src="data:image/png;base64,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"
              alt="google"
              height="40px"
              width="auto"
            />
          </Button>
          <Button onClick={() => alert("Hello")}>
            <img
              src="https://png.pngtree.com/element_our/md/20180627/md_5b334611860fa.jpg"
              alt="Microsoft"
              height="40px"
              width="auto"
            />
          </Button>
          <Button onClick={() => alert("Hello")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="Linkedin"
              height="30px"
              width="auto"
            />
          </Button>
          <Button onClick={() => alert("Hello")}>
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
              alt="Twitter"
              height="auto"
              width="40px"
            />
          </Button>
          <Button onClick={() => alert("Hello")}>
            <MoreHorizIcon style={{width:"auto",height:"40px"}}/>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Socio;

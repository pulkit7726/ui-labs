import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  Grid,
  Icon,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@mui/material";
import {GoogleLogin} from "react-google-login";
import { gapi } from "gapi-script";

type imagetype = {
  url: string;
  visibility?: boolean;
  alt: string;
  component?:any;
};

interface GridProps {
  backgroundColor?: string;
  color?: string;
  
  ImagesData: imagetype[];
  size:string;
  logo:string;
  
}

const clientId = '64805035465-7u5vbi8520gfk2v6lq0j8qnemk68imn5.apps.googleusercontent.com';

function Login({
  ImagesData,
  size,
  logo,
  backgroundColor,
  color,
}: GridProps) {
  

  // useEffect(()=>{
  // // function Start(){
  // //   gapi.client.init({
      
  // //     scope:''
  // //   })
  // // };
  // // gapi.load("client:auth2", Start)
  // },[])
  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });

 const onSuccess = (res: any) => {
  console.log('success:', res);
};
const onFailure = (err: any) => {
  console.log('failed:', err);
};
  return (
    <React.Fragment>
      <Card className="p-2" sx={{ maxWidth: "50vw", margin: "3rem auto", height: "90vh", }}>
          <img
            src={logo}
            alt="Wavelabs"
            width="150px"
            height="150px"
            style={{ marginLeft: "auto", display: "flex", marginRight: "auto" }}
          />

          <Typography variant="h5" sx={{ textAlign: "center",marginBottom:"2rem" }}>
            <b>Sign in using</b>
          </Typography>
            <Grid container className="p-2" justifyContent= "space-between"  style={{width:"36vw",margin:"auto"}}>
            {ImagesData.map((image): any => {
              return (
                <>
                { image.visibility && 
                <Grid item xs={ size == "large" ? 5 : 2 } style={{margin:"0.5rem"}}>
                   
                <Button 
                onClick={() => alert("Hello")} variant="outlined" fullWidth >
                  <Grid container justifyContent="center"> 
                  <Grid item style={{alignSelf:"center" ,display:"flex"}} >
                  <img
                    src={image.url}
                    alt={image.alt}
                    height="30px"
                    width="30px"
                  />
                  </Grid>
                  {size=="large"? 
                  <Grid item>
                    
                  <p style={{textAlign:"center",alignSelf:"center",marginLeft:"0.3rem"}}>{image.alt}</p>
                  
                  </Grid>
                  :null}
            
                  </Grid>
                </Button>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
               />
             
                
                
                </Grid>
                }
                </>
              );
            })}
            
          {/* <Button onClick={() => alert("Hello")}>
            <MoreHorizIcon style={{ width: "auto", height: "40px" }} />
          </Button>
           */}
          </Grid>

            {/* </div> */}
          

          {/* <Button>
            <Icon>
              <img
                src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
                alt="abc"
              />
            </Icon>
            <h1>hi</h1>
          </Button> */}
          <div style={{width:"50%", margin:"auto"}}>
          <Button
          style={{backgroundColor:backgroundColor,color:color}}
              type="submit"
              fullWidth
              variant="outlined"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up with Email
            </Button>
            </div>
      </Card>
    </React.Fragment>
  );
}

export default Login;

import * as React from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Typography, CardActions } from "@mui/material";
import { usePortal } from "../providers/PortalProvider";

interface ImageCardModalProps {
  image: any;
  anchorElement: HTMLElement;
}

export default function ImageCardModal({
  image,
  anchorElement
}: ImageCardModalProps) {
  const imgUrl = "http://image.tmdb.org/t/p/";
  const { setPortal } = usePortal();
  const rect = anchorElement.getBoundingClientRect();

  return (
    <Card
      onMouseLeave={() => {
        setPortal(null, null);
      }}
      sx={{
        width: rect.width * 1.5,
        height: "100%"
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          paddingTop: "calc(9 / 16 * 100%)"
        }}
      >
        <Box
          component="img"
          src={`${imgUrl}w780${image.backdrop_path}`}
          sx={{
            top: 0,
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            backgroundPosition: "50%"
          }}
        />
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            px: 2,
            pb: 0.5
          }}
        >
          <Box>More details</Box>
        </Stack>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {image.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {image.overview}
        </Typography>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

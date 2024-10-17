// VideoCard.js
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoCard = ({ title, videoUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardMedia
        component="iframe"
        src={videoUrl}
        title={title}
        sx={{ height: 200 }} // Adjust height as needed
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

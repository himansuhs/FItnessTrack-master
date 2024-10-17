// VideoTutorial.js
import React from "react";
import { Typography } from "@mui/material"; // Material-UI Typography for headings
import VideoTutorials from "../pages/VideoTutorials"; // Import the VideoTutorials component

const VideoTutorial = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Tutorial Videos
      </Typography>
      <VideoTutorials /> {/* Render the VideoTutorials component */}
    </div>
  );
};

export default VideoTutorial;

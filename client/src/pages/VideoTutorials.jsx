// VideoTutorials.js
import React from "react";
import { Grid } from "@mui/material"; // Using Grid for layout
import VideoCard from "../components/VideoCard"; // Import the VideoCard component

const VideoTutorials = () => {
  // Array of video data
  const videos = [
    {
      title: "React Basics",
      videoUrl: "https://www.youtube.com/embed/4sukvGqfj4k", // Replace with actual video IDs
    },
    {
      title: "Cardio",
      videoUrl: "https://www.youtube.com/embed/oDbwkqQA5bk", // Replace with actual video IDs
    },
    {
      title: "React Hooks",
      videoUrl: "https://www.youtube.com/embed/your_video_id3", // Replace with actual video IDs
    },
    {
      title: "React Router",
      videoUrl: "https://www.youtube.com/embed/your_video_id4", // Replace with actual video IDs
    },
    // Add more videos as needed
  ];

  return (
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <VideoCard title={video.title} videoUrl={video.videoUrl} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoTutorials;

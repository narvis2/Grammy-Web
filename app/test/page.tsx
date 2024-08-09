import React from "react";

const Test: React.FC = () => {
  return (
    <div className="video-container">
      <video
        className="w-full h-auto"
        controls
        autoPlay
        loop
        src="./video/test video.mp4"
      ></video>
    </div>
  );
};

export default Test;

"use client";
import React from "react";
import "./slider.css";

const VideoPlayer = () => {
  return (
    <div className="slider-container">
      <div className="slider-item left text-center">
        <iframe
          src="https://www.youtube.com/embed/uiQDrX8w22o?si=7SWg1rg4HsASDBJR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;

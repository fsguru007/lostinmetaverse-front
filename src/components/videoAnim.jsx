import React from "react";

export const VideoAnim = props => {
  const {src, className} = props;

  return <video loop muted playsInline autoPlay className={className} alt="image cap">
    <source src={src} type='video/mp4' />
  </video>
}
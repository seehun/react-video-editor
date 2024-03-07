import React, { useEffect, useState } from "react";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "video-react/dist/video-react.css";

function VideoPlayer({ src }) {
  const [player, setPlayer] = useState();
  const [source, setSource] = useState();

  useEffect(() => {
    setSource(URL.createObjectURL(src));
  }, [src]);

  return (
    <Player
      ref={(player) => {
        setPlayer(player);
      }}
      src={source}
    >
      <BigPlayButton position="center" />
      <LoadingSpinner />
      <ControlBar autoHide={false} />
    </Player>
  );
}

export default VideoPlayer;

import React, { useEffect, useState } from "react";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "video-react/dist/video-react.css";

function VideoPlayer({
  src,
  onPlayerChange = () => {},
  onChange = () => {},
  startTime = undefined,
}) {
  const [source, setSource] = useState();
  const [player, setPlayer] = useState(); //
  const [playerState, setPlayerState] = useState(undefined); //

  useEffect(() => {
    setSource(URL.createObjectURL(src));
  }, [src]);

  useEffect(() => {
    onPlayerChange(player);
    if (player) {
      player.subscribeToStateChange(setPlayerState);
    }
  }, [player]);

  useEffect(() => {
    if (playerState) {
      onChange(playerState);
    }
  }, [playerState]);

  return (
    <Player
      ref={(player) => {
        setPlayer(player);
      }}
      startTime={startTime}
      src={source}
    >
      <BigPlayButton position="center" />
      <LoadingSpinner />
      <ControlBar autoHide={false} />
    </Player>
  );
}

export default VideoPlayer;

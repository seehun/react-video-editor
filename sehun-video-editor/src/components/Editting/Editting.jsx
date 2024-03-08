import React, { useEffect, useRef, useState } from "react";
import styles from "./Editting.module.css";
import { Button } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangerSlider";
import { createFFmpeg } from "@ffmpeg/ffmpeg";
import VideoConversionButton from "./VideoConversionButton/VideoConversionButton";
import { sliderValueToVideoTime } from "../../utils/utils";

const ffmpeg = createFFmpeg({ log: true });

function Editting({ videoFile, setVideoFile }) {
  const uploadFile = useRef();

  const [FFmpegLoaded, setFFmpegLoaded] = useState(false);
  const [sliderValues, setSliderValues] = useState([0, 100]);

  //video slider에 필요한 state
  const [videoPlayerState, setVideoPlayerState] = useState(); //
  const [videoPlayer, setVideoPlayer] = useState(); //

  //conversion에 필요한 state
  const [processing, setProcessing] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    ffmpeg.load().then(() => {
      setFFmpegLoaded(true);
    });
    console.log(FFmpegLoaded);
  }, []);

  useEffect(() => {
    // console.log(sliderValues);
    const min = sliderValues[0];
    if (min !== undefined && videoPlayerState && videoPlayer) {
      videoPlayer.seek(sliderValueToVideoTime(videoPlayerState.duration, min));
    }
  }, [sliderValues]);

  useEffect(() => {
    if (videoPlayer && videoPlayerState) {
      const [min, max] = sliderValues;
      const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
      const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

      if (videoPlayerState.currentTime < minTime) {
        videoPlayer.seek(minTime);
      }
      if (videoPlayerState.currentTime > maxTime) {
        videoPlayer.seek(maxTime);
      }
    }
  }, [videoPlayerState]);

  useEffect(() => {
    if (!videoFile) {
      setVideoPlayerState(undefined);
    }
  }, [videoFile]);

  if (!FFmpegLoaded) return <div>load</div>;

  return (
    <div className={styles.viewport}>
      <div className={styles.contents}>
        <div className={styles.title}>
          <h1>video edit</h1>
          <Button
            variant="light"
            onClick={() => {
              uploadFile.current.click();
            }}
          >
            reselect Video
          </Button>
          <input
            type="file"
            style={{ display: "none" }}
            ref={uploadFile}
            accept=".mp4"
            onChange={(e) => {
              setVideoFile(e.target.files[0]);
            }}
          />
        </div>
        <div className={styles.video}>
          <VideoPlayer
            src={videoFile}
            onPlayerChange={(videoPlayer) => setVideoPlayer(videoPlayer)}
            onChange={(videoPlayerState) =>
              setVideoPlayerState(videoPlayerState)
            }
          />
        </div>
        <div className={styles.slideBar}>
          <MultiRangeSlider
            min={0}
            max={100}
            onChange={({ min, max }) => {
              setSliderValues([min, max]);
            }}
          />
        </div>

        <VideoConversionButton
          onConversionStart={() => {
            setProcessing(true);
          }}
          onConversionEnd={() => {
            setProcessing(false);
            setShow(true);
          }}
          ffmpeg={ffmpeg}
          videoPlayerState={videoPlayerState}
          sliderValues={sliderValues}
          videoFile={videoFile}
        />
      </div>
    </div>
  );
}

export default Editting;

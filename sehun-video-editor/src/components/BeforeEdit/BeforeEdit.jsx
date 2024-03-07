import React, { useEffect, useRef, useState } from "react";
import styles from "./BeforeEdit.module.css";
import { Button } from "react-bootstrap";
import { FFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg = new FFmpeg({ log: true });

function BeforeEdit({ setVideoFile }) {
  const uploadFile = useRef();

  //
  const [FFmpegLoaded, setFFmpegLoaded] = useState(false);

  useEffect(() => {
    ffmpeg.load().then(() => {
      setFFmpegLoaded(true);
    });
  }, []);
  //

  return (
    <div className={styles.viewport}>
      <div className={styles.contents}>
        <h1>video edit</h1>
        <div className={styles.video_img}>
          <img src={process.env.PUBLIC_URL + `/assets/Union.png`} alt="" />
        </div>
        <div className={styles.button_box}>
          <Button
            variant="primary"
            className={styles.button}
            onClick={() => {
              uploadFile.current.click();
            }}
          >
            Video Upload
          </Button>
        </div>
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
    </div>
  );
}

export default BeforeEdit;

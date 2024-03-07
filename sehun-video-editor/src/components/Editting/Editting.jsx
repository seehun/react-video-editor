import React, { useRef } from "react";
import styles from "./Editting.module.css";
import { Button } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

function Editting({ videoFile, setVideoFile }) {
  const uploadFile = useRef();
  console.log("a", videoFile);
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
          <VideoPlayer src={videoFile} />
        </div>
        <div className="slideBar"></div>
        <div className={styles.Btn_group}>
          <Button variant="light">GIF</Button>
          <Button variant="light">SOUND</Button>
          <Button variant="light">SAVE</Button>
        </div>
      </div>
    </div>
  );
}

export default Editting;

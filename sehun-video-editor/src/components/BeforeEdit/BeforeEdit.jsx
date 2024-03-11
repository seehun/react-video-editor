import React, { useEffect, useRef, useState } from "react";
import styles from "./BeforeEdit.module.css";
import { Button } from "react-bootstrap";

function BeforeEdit({ setVideoFile }) {
  const uploadFile = useRef();

  //drag &drop을 위한 코드
  const [active, setActive] = useState(false);
  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    setVideoFile(file);
    setActive(false);
  };
  //

  return (
    <div className={styles.viewport}>
      <div className={styles.contents}>
        <h1>video edit</h1>
        <div
          className={[styles.video_img, active ? styles.active : ""].join(" ")}
          onDragEnter={handleDragStart} //drag가 들어오면
          onDragLeave={handleDragEnd} //drag가 나오면
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <img src={process.env.PUBLIC_URL + "/assets/Union.png"} alt="" />
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

import React, { useRef } from "react";
import styles from "./BeforeEdit.module.css";
import { Button } from "react-bootstrap";

function BeforeEdit() {
  const uploadFile = useRef();
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
        <input type="file" style={{ display: "none" }} ref={uploadFile} />
      </div>
    </div>
  );
}

export default BeforeEdit;

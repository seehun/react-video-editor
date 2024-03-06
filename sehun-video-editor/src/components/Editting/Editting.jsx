import React, { useRef } from "react";
import styles from "./Editting.module.css";
import { Button } from "react-bootstrap";

function Editting() {
  const uploadFile = useRef();
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
          <input type="file" style={{ display: "none" }} ref={uploadFile} />
        </div>
        <div className={styles.video}></div>
        <div className="slideBar"></div>
        <div className={styles.Btn_group}>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}

export default Editting;

import React from "react";
import styles from "./HomeComponent.module.css";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate();
  return (
    <div className={styles.viewport}>
      <div className={styles.contents}>
        <div className={styles.home_content_box}>
          <div
            data-text="EDIT"
            className={styles.home_title}
            onClick={() => {
              navigate("/videoEdit");
            }}
          >
            EDIT
          </div>
          <div
            data-text="LOGIN"
            className={styles.home_title}
            onClick={() => {
              navigate("/login");
            }}
          >
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

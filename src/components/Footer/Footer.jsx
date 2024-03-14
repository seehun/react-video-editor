import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

function Footer({ currentPage }) {
  const navigate = useNavigate();
  return (
    <div className={styles.viewport}>
      <div className={styles.contents}>
        <div className={styles.content_info}>
          <img src={process.env.PUBLIC_URL + "/assets/VE_w.png"} alt="" />
          <div>
            <span className={styles.title}>Tel.</span>
            <span>010-3294-5804</span>
          </div>
          <div>
            <span className={styles.title}>Email</span>
            <span>shoon199@naver.com</span>
          </div>
        </div>
        <div className={styles.footer_btns}>
          <button
            className={currentPage === "videoEdit" ? styles.active : ""}
            onClick={() => {
              navigate("/videoEdit");
            }}
          >
            비디오 편집
          </button>
          <button className={currentPage === "imageEdit" ? styles.active : ""}>
            이미지 편집
          </button>
          <button
            className={currentPage === "login" ? styles.active : ""}
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

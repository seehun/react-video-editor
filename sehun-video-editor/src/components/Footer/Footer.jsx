import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.viewport}>
      <div className={styles.contents}>
        <div className={styles.content_info}>
          <img src={process.env.PUBLIC_URL + `/assets/VE_w.png`} alt="" />
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
          <button className={styles.active}>비디오 편집</button>
          <button>이미지 편집</button>
          <button>로그인</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.header_contents}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={process.env.PUBLIC_URL + `/assets/V.png`} alt="" />
          <img src={process.env.PUBLIC_URL + `/assets/E.png`} alt="" />
        </button>
        <div className={styles.header_btns}>
          <button className={styles.active}>비디오 편집</button>
          <button>이미지 편집</button>
          <button>로그인</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

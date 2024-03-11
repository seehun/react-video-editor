import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header({ currentPage }) {
  console.log(currentPage);
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.header_contents}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={process.env.PUBLIC_URL + "assets/VE_b.png"} alt="" />
        </button>
        <div className={styles.header_btns}>
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

export default Header;

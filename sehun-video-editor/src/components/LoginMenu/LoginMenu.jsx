import React, { useRef } from "react";
import styles from "./LoginMenu.module.css";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginMenu() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitRef = useRef();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/videoEdit");
  };

  return (
    <div className={styles.viewport}>
      <div className={styles.contents}>
        <div className={styles.loginFormBox}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("id", { required: true })}
              placeholder="id"
              autoFocus
            />
            <input
              {...register("pw", { required: true })}
              placeholder="pw"
              type="password"
            />

            <Button
              variant="primary"
              onClick={() => {
                submitRef.current.click();
              }}
            >
              submit
            </Button>
            <input type="submit" ref={submitRef} className={styles.none} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginMenu;

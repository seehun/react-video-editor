import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LoginMenu from "components/LoginMenu/LoginMenu";

// 필요없어짐
function Login() {
  return (
    <div>
      <Header currentPage={"login"} />
      <LoginMenu />
      <Footer />
    </div>
  );
}

export default Login;

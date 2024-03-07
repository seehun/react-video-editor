import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import BeforeEdit from "../components/BeforeEdit/BeforeEdit";
import Footer from "../components/Footer/Footer";
import Editting from "../components/Editting/Editting";

function Home() {
  const [videoFile, setVideoFile] = useState();

  useEffect(() => {
    console.log(videoFile);
  }, [videoFile]);

  return (
    <div>
      <Header />
      {!videoFile ? (
        <BeforeEdit setVideoFile={setVideoFile} />
      ) : (
        <Editting videoFile={videoFile} setVideoFile={setVideoFile} />
      )}
      <Footer />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import Header from "components/Header/Header";
import BeforeEdit from "components/BeforeEdit/BeforeEdit";
import Footer from "components/Footer/Footer";
import Editing from "components/Editting/Editting";

function VideoEdit() {
  const [videoFile, setVideoFile] = useState();

  return (
    <div>
      <Header currentPage={"videoEdit"} />
      {!videoFile ? (
        <BeforeEdit setVideoFile={setVideoFile} />
      ) : (
        <Editing videoFile={videoFile} setVideoFile={setVideoFile} />
      )}
      <Footer currentPage={"videoEdit"} />
    </div>
  );
}

export default VideoEdit;

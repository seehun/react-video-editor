import { Button } from "react-bootstrap";
import { fetchFile } from "@ffmpeg/util";
import { readFileAsBase64, sliderValueToVideoTime } from "../../../utils/utils";
import styles from "./VideoConversionButton.module.css";

function VideoConversionButton({
  videoPlayerState,
  sliderValues,
  videoFile,
  ffmpeg,
  onConversionStart = () => {},
  onConversionEnd = () => {},
  onGifCreated = () => {},
}) {
  const convertToGif = async () => {
    // starting the conversion process
    onConversionStart(true);

    const inputFileName = "input.mp4";
    const outputFileName = "output.gif";

    // writing the video file to memory
    ffmpeg.FS("writeFile", inputFileName, await fetchFile(videoFile));

    const [min, max] = sliderValues;
    const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
    const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

    // cutting the video and converting it to GIF with a FFMpeg command
    await ffmpeg.run(
      "-i",
      inputFileName,
      "-ss",
      `${minTime}`,
      "-to",
      `${maxTime}`,
      "-f",
      "gif",
      outputFileName
    );

    // reading the resulting file
    const data = ffmpeg.FS("readFile", outputFileName);

    // converting the GIF file created by FFmpeg to a valid image URL
    const gifUrl = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );

    const link = document.createElement("a");
    link.href = gifUrl;
    link.setAttribute("download", "");
    link.click();

    // ending the conversion process

    onConversionEnd(false);
  };

  const onCutTheVideo = async () => {
    onConversionStart(true);

    const [min, max] = sliderValues;
    const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
    const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

    ffmpeg.FS("writeFile", "input.mp4", await fetchFile(videoFile));
    await ffmpeg.run(
      "-ss",
      `${minTime}`,
      "-i",
      "input.mp4",
      "-t",
      `${maxTime}`,
      "-c",
      "copy",
      "output.mp4"
    );

    const data = ffmpeg.FS("readFile", "output.mp4");
    const dataURL = await readFileAsBase64(
      new Blob([data.buffer], { type: "video/mp4" })
    );

    const link = document.createElement("a");
    link.href = dataURL;
    link.setAttribute("download", "");
    link.click();

    onConversionEnd(false);
  };

  return (
    <>
      <div className={styles.Btn_group}>
        <Button variant="light" onClick={() => convertToGif()}>
          GIF
        </Button>
        <Button variant="light">SOUND</Button>
        <Button variant="light" onClick={() => onCutTheVideo()}>
          SAVE
        </Button>
      </div>
    </>
  );
}

export default VideoConversionButton;

**install한 라이브러리 목록**

react-router-dom  
react-bootstrap bootstrap  
@ffmpeg/ffmpeg  
@ffmpeg/util  
video-react

**트러블슈팅**

## input에서 동영상 업로드하는 법

input태그 type을 file로 지정
input태그 onChange를 사용하여 state값 업데이트 -> onChange={(e)=>setVideoFile(e.target.files[0])}  
이러면 File객체가 들어가게 되는데 이를 DOMString으로 반환 -> URL.createObjectURL(videoFile)  
이 값을 video-react의 Player의 source값으로 사용한다.

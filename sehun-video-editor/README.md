# Video Editor 만들기

## install한 라이브러리 목록\*\*

react-router-dom  
react-bootstrap bootstrap  
@ffmpeg/ffmpeg@0.9.8  
@ffmpeg/core@0.10.0  
video-react  
react-hook-form

## 트러블슈팅\*\*

### input에서 동영상 업로드하는 법

1.input태그 type을 file로 지정  
2.input태그 onChange를 사용하여 state값 업데이트 -> onChange={(e)=>setVideoFile(e.target.files[0])}  
3.이러면 File객체가 들어가게 되는데 이를 DOMString으로 반환 -> URL.createObjectURL(videoFile)  
4.이 값을 video-react의 Player의 source값으로 사용한다.

### SharedArrayBuffer is not defined 문제

ffmpeg에서 FS에서 계속 오류가 발생하여  
ffmpeg버전을 0.12.x에서 0.11.6으로 다운그레이드  
-> createFFmpeg에서 sharedArrayBuffer is not defined 문제 발생

해결방법  
https://github.com/ffmpegwasm/ffmpeg.wasm/issues/262

1. npm uninstall @ffmpeg/ffmpeg @ffmpeg/core
2. npm install @ffmpeg/ffmpeg@0.9.8 @ffmpeg/core@0.10.0
3. npm install http-proxy-middleware --save
4. src/setupProxy.js 만들기

```
module.exports = function (app) {
    app.use(function (request, response, next) {
        response.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        response.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        next();
    });
};
```

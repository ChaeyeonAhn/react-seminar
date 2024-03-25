// Play and pause a video
// 리액트와 리액트가 아닌 것을 연결해주어야 하므로 useEffect 를 쓴다. 비디오의 실행은 리액트에서 관리하는 게 아니라서, 
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef(null);

  // is Playing 이 바뀔 때마다 돔에 접근해서 값을 바꿔줘야 함. 

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);
  // 어레이 안의 값이 바뀌면 함수가 실행.
  // 어레이 안에 isP 넣어주기


  return (
    <>
      <button onClick = {() => {
        setIsPlaying((curr) => {!curr});
      }}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        ref = {videoRef}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        loop
        playsInline
      />
    </>
  );
};

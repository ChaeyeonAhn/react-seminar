// Create a stopwatch using setInterval and clearInterval.
// 리렌더링 해도 업데이트 안 되는 정보를 쓰려고. 
import { useRef } from "react";
import { useState } from "react";

export const Stopwatch = () => {

  const intervalId = useRef(null);

  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const seconds = currentTime && startTime ? (currentTime - startTime) / 1000 : 0;

  // 스타트 누르면 시간 기록, 인터벌에 나온 시간 재서 같이 더해서 멈췄을 때 시간 표시.
  return (
    <>
      <span>{seconds} seconds</span>
      <div>
        <button onClick = {() => {
          const now = Date.now();
          setStartTime(now);
          setCurrentTime(now); // 초기화.

          intervalId.current = setInterval(() => {
            setCurrentTime(Date.now()); // 스탑워치라는 함수가 다 실행됨. 
          }, 10);
          // 인터벌 시작하는데 10ms 마다 이 함수 실행. 이게 셋 인터벌의 역할.
          // 그걸 intervalId 의 current 에 저장


        }}>Start</button> 

        <button onClick = {() => {
          clearInterval(intervalId.current);
        }}>Stop</button>
      </div>
    </>
  );
};

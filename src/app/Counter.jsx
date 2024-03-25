// Increment the count when the button is clicked
// useState 사용자에게 보여지는 정보니까. 
// 그리고 onClick 쓸 거고, 

// * 페이지 반영 확인!
import { useState } from "react"; // 라이브러리에서 빼 옴.


export const Counter = () => {
  // const count = 0;
  const [count, setCount] = useState(0); // 초깃값 0 집어넣기.

  return (
    <>
      <button onClick = {() => {
        setCount((curr) => curr + 1) // 현재 상태를 받아서 나중 상태를 반환하도록 해 줌!
      }}>Clicked {count} times</button> 
    </>
  );
};

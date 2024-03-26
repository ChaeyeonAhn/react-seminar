// Focus input on button click
import { useRef } from "react";


export const Focus = () => {

  const inputRef = useRef(null); // DOM 자체에 접근.
  return (
    <>
      <input ref = {inputRef} type="text" /> 
      <button onClick = {() => {
        // console.log(inputRef.current); // 콘솔에서 확인
        inputRef.current.focus();
        // inputRef.current.value 콘솔로 확인해보기!
      }}>Focus the input</button>
    </>
  );
};

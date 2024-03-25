// Fetch an image from the API and display it

// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import { useState } from "react";

const fetchImage = async () => {
  const res = await fetch("https://nekos.best/api/v2/happy"); // fetch 는 await 을 반환한다.
  // 저 요청이 응답이 오기까지 기다려. 
  // await 은 async 안에서만 쓸 수 있음.

  const data = await res.json(); // 얘도 await 반환
  return data.results[0].url; 
}; // api fetching

export const Fetch = () => {
  const [imageUrl, setImageUrl] = useState("");
  
  // "https://nekos.best/api/v2/happy/19c3f2e8-2aec-4358-8e96-87692d9aa2bd.gif";

  useEffect(() => { // parameter 에 async 못 씀
    const apiCall = async () => { // 종료 됐는지 체크해주면 오류 발생 방지. 
      const url = await fetchImage(); 
      setImageUrl(url);
    };
    apiCall();

  }, []); // 아무것도 안 넣어야 처음 새로고침 될 때만 실행됨.
  return (
    <>
      <img src={imageUrl} alt="Happy anime character" />
    </>
  );
};

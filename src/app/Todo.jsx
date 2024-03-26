import { useState } from "react";
import { useRef } from "react";
// 제출 버튼 누르면 로컬 스토리지에 해당 텍스트 받아서 저장. 
// 돔 객체에 접근, useRef
// 그리고 계속 제출한 건 사용자에게 보이게 띄워 놓아야 함.
// useState
// 수정 버튼 누르면 ??? 해당 항목의 키를 찾아 그 value 값을 수정할 수 있도록 해야 함.
// 삭제 버튼 누르면 로컬 스토리지에서 해당 키 찾아 삭제.



export const Todo = () => {
  // const [count, setCount] = useState(0); 
  // 이거 쓰니까 새로고침 될 때 마다 애들 카운트가 다시 0으로 시작돼서, 원래 키가 0 이었던 애가 값이 바뀌어. 
  // const keyCount = useRef(0); // 키 카운트가 렌더링 후에도 남길 바라는 것.
  const [keyByDate, setKeyByDate] = useState(Date.now()); // 고유 키 값을 만드는 또 다른 방법, 사용자에게 보여지지 않는 정보지만 useState 를 썼습니다!


  const [todo, setToDo] = useState("");

  const userInput = useRef(null);
 
  // function ToDoList() { // 처음에 실행하면 무조건 리스트 안에 있는 애들부터 띄워주는 컴포넌트.

  //     const finalList = document.createElement("ul");

  //     for (let i = 0; i < window.localStorage.length; i++){
  //     const key = window.localStorage.key(i);
  //     const text = window.localStorage.getItem(key);
        
  //     const newToDo = document.createElement("li");
  //     const newToDoText = document.createTextNode(text);
  //     newToDo.appendChild(newToDoText);
  //     finalList.appendChild(newToDo);
  //     }

  //     return finalList;
  //   }

  return (
    <>
      <span className = "title">To-do</span>

      <div>
        <input ref = {userInput} type = "text" placeholder = "To-do 를 입력하세요."></input>
        <button onClick = {() => {
          window.localStorage.clear();
          
          window.localStorage.setItem(`${keyByDate}`, userInput.current.value); 


          setKeyByDate(Date.now())

          // just for testing...
          for (let i = 0; i < window.localStorage.length; i++){
            const key = window.localStorage.key(i);
            const value = window.localStorage.getItem(key);
            console.log(key + value); 
            
          } // 추가되는 순서가 뭐지? 정해진 게 없어 보임

          // for (let i = 0; i < window.localStorage.length; i++){
          //   const key = window.localStorage.key(i);
          //   const text = window.localStorage.getItem(key);
            
          //   const newToDo = document.createElement("li");
          //   const newToDoText = document.createTextNode(text);
          //   newToDo.appendChild(newToDoText);

          //   const finalList = document.querySelector("#lists");
          //   finalList.appendChild(newToDo);
            

          //   // 이 텍스트를 카드 같은 거에 넣어서 텍스트랑 수정 버튼 삭제 버튼 이렇게 문서에 넣기.
          //   // 거기에 수정, 삭제 버튼 역할도 지정해주기..
          //   // onClick = removeItem(key)
          //   // onClick = input 창이 다시 띄워지며, (수정 버튼 눌림 여부로 true false 해서 바꿔치기 하면서 true 면 input 창이 보여지고, false 면 저장 되게..?)
          // }

          // setToDo(userInput.current); 로컬 스토리지에 있는 모든 key-value pair 꺼내서 보여줘.
        }}>OK</button>
      </div>

      {/* <div>
        <ToDoList />
      </div> */}
    
    </>
  );
};



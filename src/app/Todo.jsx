import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// 제출 버튼 누르면 로컬 스토리지에 해당 텍스트 받아서 저장. 
// 돔 객체에 접근, useRef
// 그리고 계속 제출한 건 사용자에게 보이게 띄워 놓아야 함.
// useState
// 수정 버튼 누르면 ??? 해당 항목의 키를 찾아 그 value 값을 수정할 수 있도록 해야 함.
// 삭제 버튼 누르면 로컬 스토리지에서 해당 키 찾아 삭제.

// ---------------------------------------------------------------------------------------------
// LocalStorage 도 react 외적인 거니까 useEffect 써서 아규먼트로 함수와 빈 어레이를 넣어주는 과정이 필요하고,
// 어레이가 바뀔 때마다 함수가 실행되는데, state (화면에 띄워지는 리스트)가 바뀌어서 띄워진다..!

// 로컬 스토리지에 저장할 때도 키 계속 여러개 하지 말고, 키 하나에 아예 어레이를 value 로 넣는 식으로 해서 해보잣
// ---------------------------------------------------------------------------------------------

// 새로고침 해도 로컬 스토리지에 있는 것들 다 보여주려면
// 로컬 스토리지에 뭐가 있다면 그걸 다 보여주기
// 없다면 뭐 써서 입력하면 그 때부터 어레이 생겨서 그거 보여주기






export const Todo = () => {

  
  const [todo, setToDo] = useState( "[]" );
  var sameArr = [];
  
  const userInput = useRef(null); // 사용자가 넣어준 텍스트


  useEffect(() => {
    setToDo(window.localStorage.getItem('toDoList'));

  }, JSON.parse(window.localStorage.getItem('toDoList')));

  const Display = () => {
    var displayToDo = "";
    if (JSON.parse(todo)){ // todo 에 뭐가 있을 때만
      displayToDo = JSON.parse(todo).map((el) => (
        <li className = "toDoList" key = {el.id} >
          <h4 id = "text" >{el.text}</h4>
          
          <button id = "remove" onClick = {() => {
            // just testing...
            // console.log(array);

            const array = JSON.parse(window.localStorage.getItem('toDoList'));
            for (let i = 0; i < array.length; i++){
              if (array[i].id === el.id) {
                array.splice(i,1);
              }
            }
            window.localStorage.setItem('toDoList', JSON.stringify(array));
          }}>삭제</button>
          
          <button id = "modify" >수정</button>
        </li>
      ));
    }

    return <ul>{ displayToDo }</ul>;
  }


  return (
    <>
      <span className = "title">To-do</span>

      <div>
        <input ref = {userInput} type = "text" placeholder = "To-do 를 입력하세요."></input>
        <button onClick = {() => {
          // window.localStorage.clear();

          
          
          if (window.localStorage.getItem('toDoList')) { // 만약 로컬 스토리지가 비어 있지 않다면
            const array = window.localStorage.getItem('toDoList'); // 내가 텍스트 저장하는 키로 어레이에 접근
            const array2 = JSON.parse(array); // 원래 배열 객체로 만들어줌
            
            if (userInput.current.value !== "") {
              array2.push({ id: Date.now(), text: userInput.current.value }); // 받은 텍스트를 배열 안에 넣어줌
              
              const finalArray = JSON.stringify(array2) // 다시 배열을 문자로 패킹해서
              window.localStorage.setItem('toDoList', finalArray); // 로컬 스토리지에 넣어주기
            }
          }

          else { // 만약 비어 있다면, 새로운 키-값 쌍부터 넣어준다. 
            const toDoArray = [];
            const toDoArray2 = JSON.stringify(toDoArray);
            window.localStorage.setItem('toDoList', toDoArray2); 

            
            const array = window.localStorage.getItem('toDoList'); // 내가 텍스트 저장하는 키로 어레이에 접근
            const array2 = JSON.parse(array); // 원래 배열 객체로 만들어줌
            
            if (userInput.current.value !== "") {
              array2.push({ id: Date.now(), text: userInput.current.value }); // 받은 텍스트를 배열 안에 넣어줌
              
              const finalArray = JSON.stringify(array2) // 다시 배열을 문자로 패킹해서
              window.localStorage.setItem('toDoList', finalArray); // 로컬 스토리지에 넣어주기
            }
          }

          // just for testing...
          const value = window.localStorage.getItem('toDoList');
          const value2 = JSON.parse(value);
          for (let i = 0; i < value2.length; i++){
            console.log(value2[i]); 
          }


          // ----------------------------------------------------

        }}>OK</button>
      </div>

      <div>
        <Display></Display>
      </div>
    
    </>
  );
};



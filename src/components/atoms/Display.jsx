// import { useState } from "react";
import { setToDo, todo } from "/Users/anchaeyeon/react-seminar/src/components/atoms/Display.jsx";

import { useRef } from "react";

// import { useEffect } from "react";

export const Display = () => {
  // const [todo, setToDo] = useState(JSON.parse(window.localStorage.getItem("toDoList")));
  // const userInput = useRef(null); // 사용자가 넣어준 텍스트
  const modifiedInput = useRef(null); // 수정된 텍스트

  var displayToDo = "";

  if (todo) {
    // todo 에 뭐가 있을 때만
    displayToDo = todo.map((el) => (
      <li className="toDoList" key={el.id}>
        <div id="left">
          <button
            id="checkbox"
            style={{ backgroundColor: el.color }}
            onClick={() => {
              const array = JSON.parse(window.localStorage.getItem("toDoList"));
              for (let i = 0; i < array.length; i++) {
                if (array[i].id === el.id) {
                  if (array[i].done) {
                    array[i].done = false;
                    array[i].color = "red";
                  } else {
                    array[i].done = true;
                    array[i].color = "blue";
                  }
                }
              }
              window.localStorage.setItem("toDoList", JSON.stringify(array));
              setToDo(array);
            }}
          ></button>

          <h4 id="text">
            {el.modify ? (
              <input width="90%" size="40" ref={modifiedInput} defaultValue={el.text}></input>
            ) : el.done ? (
              <del>{el.text}</del>
            ) : (
              el.text
            )}
          </h4>
        </div>
        <div id="right">
          <button
            id="modify"
            onClick={() => {
              const array = JSON.parse(window.localStorage.getItem("toDoList"));
              for (let i = 0; i < array.length; i++) {
                if (array[i].id === el.id) {
                  if (array[i].modify) array[i].modify = false;
                  else array[i].modify = true;
                }
              }
              window.localStorage.setItem("toDoList", JSON.stringify(array));
              setToDo(array);

              if (el.modify && modifiedInput.current) {
                const array = JSON.parse(window.localStorage.getItem("toDoList"));
                for (let i = 0; i < array.length; i++) {
                  if (array[i].id === el.id) {
                    array[i].text = modifiedInput.current.value;
                  }
                }
                window.localStorage.setItem("toDoList", JSON.stringify(array));
                setToDo(array);
              }
            }}
          >
            {el.modify ? "완료" : "수정"}
          </button>

          <button
            id="remove"
            onClick={() => {
              // just testing...
              // console.log(array);

              const array = JSON.parse(window.localStorage.getItem("toDoList"));
              for (let i = 0; i < array.length; i++) {
                if (array[i].id === el.id) {
                  array.splice(i, 1);
                }
              }
              window.localStorage.setItem("toDoList", JSON.stringify(array));
              setToDo(array);
            }}
          >
            삭제
          </button>
        </div>
      </li>
    ));
  }

  return <ul>{displayToDo}</ul>;
};

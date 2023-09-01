import React, { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const todos = ["Frontend", "Dinner", "English", "Learn"];

  const [list, setList] = useState([
    "Изучить JavaScript",
    "Изучить паттерны проектирования",
    "ReactJS Hooks (useState, useReducer, useEffect и т.д.)",
    "Redux (redux-observable, redux-saga)",
  ]);

  const [newList, setNewList] = useState("");

  const takeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setNewList(target.value);
  };

  const addList = (key: any) => {
    if (key.code === "Enter") {
      list.push(newList);
    }
    setNewList("");
  };

  return (
    <div className="App">
      <div className="modal-view">
        <div className="mv-left">
          <h4>Все задачи</h4>
          {todos.map((t: string) => (
            <li>{t}</li>
          ))}
          <div className="mv-add">
            <span>+</span> Добавить папку
          </div>
        </div>
        <div className="mv-right">
          <h1>Frontend</h1>
          <div className="mv-super-input">
            <input
              onKeyDown={(key) => addList(key)}
              onChange={(e) => takeChange(e)}
              type="text"
            />
          </div>
          {list.map((l: string) => (
            <div className="mv-list">
              <input type="checkbox" /> {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

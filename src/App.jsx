import { useRef, useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">Todo</a>
          </li>
          <li>
            <a href="/">TicTacToe</a>
          </li>
          <li>
            <a href="/">Search</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <Todolist />
    </div>
  );
}

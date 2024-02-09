import { useRef, useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";
import Search from "./Search";
import MemoizedComponent from "./MemoizedComponent";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState("Todo");
  const onClickMenu = (text) => {
    setSelectedMenu(text);
  };
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => onClickMenu("Todo")}>
              Todo
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onClickMenu("TicTacToe")}>
              TicTacToe
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onClickMenu("Search")}>
              Search
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onClickMenu("Memoized")}>
              Memoized
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onClickMenu("About")}>
              About
            </a>
          </li>
        </ul>
      </nav>
      {selectedMenu === "Todo" && <Todolist />}
      {selectedMenu === "Search" && <Search />}
      {selectedMenu === "Memoized" && <MemoizedComponent />}
    </div>
  );
}

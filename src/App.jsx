import { useRef, useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";
import Search from "./Search";
import ReactExps from "./ReactExps";

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
            <a href="#" onClick={() => onClickMenu("react")}>
              React
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
      {selectedMenu === "react" && <ReactExps />}
    </div>
  );
}

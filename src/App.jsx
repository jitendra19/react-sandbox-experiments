import { useRef, useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";

const data = ["patna", "Punjab", "Pune", "delhi", "bangal"];

function Search() {
  // let refValue = React.createRef();
  let refValue = useRef("");
  const [searchData, setSearchData] = React.useState([]);
  const onChangeText = (e) => {
    const data1 = data.filter((a) => {
      if (e.target.value === "") return;
      return a.indexOf(e.target.value) === 0;
    });
    console.log(data1);
    setSearchData(data1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" onChange={(e) => onChangeText(e)} refs={refValue} />
      {searchData &&
        searchData.length > 0 &&
        searchData.map((a) => {
          return <div>{a}</div>;
        })}
    </div>
  );
}

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
            <a href="#" onClick={() => onClickMenu("Home")}>
              Home
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
    </div>
  );
}

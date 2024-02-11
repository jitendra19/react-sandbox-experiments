import { useRef, useState, useReducer } from "react";

const data = [
  "patna",
  "Punjab",
  "Pune",
  "delhi",
  "bangal",
  "patna",
  "Punjab",
  "Pune",
  "delhi",
  "bangal",
  "patna",
  "Punjab",
  "Pune",
  "delhi",
  "bangal",
  "patna",
  "Punjab",
  "Pune",
  "delhi",
  "bangal",
  "patna",
  "Punjab",
  "Pune",
  "delhi",
  "bangal",
  "patna",
  "Punjab",
  "Pune",
  "delhi",
  "bangal",
];

export default function Search() {
  // let refValue = React.createRef();
  let refValue = useRef("");
  // const [searchData, setSearchData] = useState(data);
  const [searchData, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SEARCH": {
        const data1 = data.filter((a) => {
          return a.indexOf(action.payload) === 0;
        });
        return data1;
      }
      default:
        return state;
    }
  }, data);

  const onChangeText = (e) => {
    // const data1 = data.filter((a) => {
    //   return a.indexOf(e.target.value) === 0;
    // });
    // // console.log(data1);
    // setSearchData(data1);

    dispatch({ type: "SEARCH", payload: e.target.value });
  };
  return (
    <div className="searchList">
      <h1>Hello jiten</h1>
      <h2>It is a seach Component</h2>
      <input
        type="text"
        id="searchItemsInput"
        onChange={(e) => onChangeText(e)}
        refs={refValue}
      />
      <div className="list">
        {searchData &&
          searchData.length > 0 &&
          searchData.map((a, index) => {
            return (
              <div className="listItem" key={index}>
                <span> {a} </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

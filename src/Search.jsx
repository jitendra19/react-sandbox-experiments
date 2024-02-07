import React, { useRef, useState } from "react";
import "./styles.css";

const data = ["patna", "Punjab", "Pune", "delhi", "bangal"];

export default function Search() {
  // let refValue = React.createRef();
  let refValue = useRef("");
  const [searchData, setSearchData] = React.useState(data);
  const onChangeText = (e) => {
    const data1 = data.filter((a) => {
      return a.indexOf(e.target.value) >= 0;
    });
    // console.log(data1);
    setSearchData(data1);
  };
  return (
    <div>
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

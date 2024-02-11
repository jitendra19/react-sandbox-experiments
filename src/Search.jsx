import { useRef, useState, useReducer, useEffect } from "react";
import axios from "axios";
let counter = 0;

export default function Search() {
  // let refValue = React.createRef();
  let refValue = useRef("");
  const [originalData, setOriginalData] = useState([]);
  const [searchData, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SEARCH": {
        return originalData.filter((a) => {
          return a.country.indexOf(action.payload) === 0;
        });
      }
      case "FETCH": {
        return action.payload;
      }
      default:
        return state;
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((countries) => {
        // console.log(countries.data.data[0]);
        setOriginalData(countries.data.data);
        dispatch({ type: "FETCH", payload: countries.data.data });
      });
  }, []);

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
      <h5>Rendering counter: {counter++}</h5>
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
                {/* {JSON.stringify(a)} */}
                <span> {a.country} </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

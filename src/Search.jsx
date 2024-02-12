import { useRef, useState, useReducer, useEffect } from "react";
import axios from "axios";
import strings from "./strings";
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
        setOriginalData(countries.data.data);
        dispatch({ type: "FETCH", payload: countries.data.data });
      });
  }, []);

  const onChangeText = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value });
  };
  return (
    <div className="searchList">
      <h5>
        {strings.search.renderingCounter}: {counter++}
      </h5>
      <h1>Hello Jiten</h1>
      <h2>{strings.search.secondTitle}</h2>
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
                <span> {a.country} </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

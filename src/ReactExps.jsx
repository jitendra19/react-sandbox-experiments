import React, { useMemo, memo, useState } from "react";
import "./styles.css";

// Memo Example
const Counter = memo(({ counter }) => {
  // console.log("conter value", counter + " " + Date.now());
  alert("counter++++");
  const func = (counter) => {
    // alert(counter);
    if (counter >= 0 && counter <= 5) return "Red";
    else if (counter > 5 && counter <= 10) return "Green";
    return "Blue";
  };
  return <h2>{func(parseInt(counter))}</h2>;
});

const Counter1 = ({ counter }) => {
  // console.log("counter1111111111111111 value", counter + " " + Date.now());
  alert("counter11111--", counter);
  const func = (counter) => {
    if (counter >= 0 && counter <= 5) return "Black";
    else if (counter > 5 && counter <= 10) return "white";
    return "grey";
  };
  return <h2>{func(counter)}</h2>;
};
export default function ReactExps() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>value of Counter {counter}</h1>
      <Counter counter={counter} />
      <Counter1 counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment by 1</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement by 1</button>
    </div>
  );
}

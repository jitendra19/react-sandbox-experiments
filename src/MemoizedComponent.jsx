import React, { useMemo, memo, useState } from "react";
import "./styles.css";

const InitialCounter = ({ counter }) => {
  console.log("initialCounter Component - ", counter);
  return (
    <h4>
      initialCounter : {counter >= 0 && counter <= 5 && "Red"}
      {counter > 5 && counter <= 10 && <>Green</>}
      {counter > 10 && <>Blue</>}
    </h4>
  );
};

// Memo Example - no matter whether compoenent is memoized or not
// it is getting rendered bcos prop counter is getting changed.
const MemoCounter = memo(({ counter }) => {
  console.log("MemoCounter Component ", counter);
  const func = (counter) => {
    if (counter >= 0 && counter <= 5) return "Red";
    else if (counter > 5 && counter <= 10) return "Green";
    return "Blue";
  };
  return (
    <>
      <h4>MemoCounter : {func(counter)}</h4>
    </>
  );
});

// Optimized Counter Example which is memoized and
const OptimizedCounter = memo(({ colorValue }) => {
  console.log("optimizedCounter Component ", colorValue);
  return <h4>OptimizedCounter : {colorValue}</h4>;
});

export default function MemoizedComponent() {
  const [counter, setCounter] = useState(0);

  const colorValue = useMemo(() => {
    // alert("func");
    if (counter >= 0 && counter <= 5) return "Red";
    else if (counter > 5 && counter <= 10) return "Green";
    return "Blue";
  }, [counter]);

  return (
    <div>
      <h1>value of Counter {counter}</h1>
      <React.StrictMode>
        <InitialCounter counter={counter} />
        <MemoCounter counter={counter} />
        <OptimizedCounter colorValue={colorValue} />
      </React.StrictMode>
      <button onClick={() => setCounter(counter + 1)}>Increment by 1</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement by 1</button>
    </div>
  );
}

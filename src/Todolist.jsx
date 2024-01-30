import { useRef, useState } from "react";
import "./styles.css";

const listItems = [
  {
    key: new Date().valueOf(),
    name: "grocery",
    checked: false,
  },
  {
    key: new Date().valueOf() + 1,
    name: "finance audit",
    checked: true,
  },
  {
    key: new Date().valueOf() + 2,
    name: "learning react",
    checked: false,
  },
  {
    key: new Date().valueOf() + 3,
    name: "yoga",
    checked: true,
  },
  {
    key: new Date().valueOf() + 4,
    name: "stock market",
    checked: true,
  },
  {
    key: new Date().valueOf() + 5,
    name: "gratitude",
    checked: false,
  },
];

export default function TodoList() {
  const [items, setItems] = useState(listItems);

  const addItem = (e) => {
    e.preventDefault();
    if (addItemRef.current && addItemRef.current.value !== "") {
      setItems([
        ...items,
        {
          key: new Date().valueOf(),
          name: addItemRef.current.value,
          checked: false,
        },
      ]);
      addItemRef.current.value = null;
    }
  };

  let addItemRef = useRef(null);

  const onSelectCheckbox = (key) => {
    const mappedItems = items.map((a) => {
      if (a.key === key) {
        a.checked = !a.checked;
      }
      return a;
    });
    setItems(mappedItems);
  };

  return (
    <div className="App">
      <div className="todoList">
        <h1>TO DO list</h1>
        <form onSubmit={(e) => addItem(e)}>
          <input type="text" ref={addItemRef}></input>
        </form>
        <div className="todoListItems">
          {items &&
            items.map((a) => (
              <div key={a.key}>
                <input
                  style={{
                    marginRight: "2rem",
                    height: "15px",
                    width: "15px",
                    minWidth: "15px",
                  }}
                  type="checkbox"
                  checked={!!a.checked}
                  onChange={() => onSelectCheckbox(a.key)}
                />
                <label
                  for={a.name}
                  style={{
                    textDecoration: a.checked ? "line-through" : "none",
                  }}
                >
                  {a.name}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

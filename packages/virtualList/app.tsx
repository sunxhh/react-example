import { FixedSizeList } from "react-window";
import "./app.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const list = new Array(10).fill(6);
console.log(list);
export const App = function () {
  const [id, setId] = useState(0);
  console.log("App");
  const listRef = useRef<FixedSizeList>(null);
  console.log("Com");
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    listRef.current?.scrollToItem(Math.random() * 10000);
  }, [id]);
  const render = function () {
    return (
      <FixedSizeList
        ref={listRef}
        height={500}
        itemCount={1000000}
        itemSize={35}
        width={300}
      >
        {({ index, style }) => (
          <div style={style}>
            {id} - Row {index}
          </div>
        )}
      </FixedSizeList>
    );
  };
  return (
    <div className="wrapper">
      <div className="left">
        <ul>
          {list.map((_, index) => {
            return (
              <li
                onClick={() => {
                  setId(index);
                }}
                key={index}
              >
                {index}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">{render()}</div>
    </div>
  );
};

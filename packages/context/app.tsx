import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./app.scss";
import { ListContext } from "./context";
import cx from "classnames";

export const Com = memo(function Com({
  id,
  isSelect,
  change,
}: {
  id: number;
  isSelect: boolean;
  change: (id: number[]) => void;
}) {
  const click = useCallback(
    function () {
      change([id]);
    },
    [change]
  );
  console.log("haydar", id);
  return (
    <div className={cx("item", { "is-select": isSelect })} onClick={click}>
      列表-{id}
    </div>
  );
});

const list = new Array(10).fill(0);

export const App = function () {
  const [selected, setSelected] = useState<number[]>([]);

  // 使用 useRef 保存最新的 setSelected 引用
  const changeRef = useRef<{ setSelected: (v: number[]) => void }>({
    setSelected: () => {},
  });

  // 使用 useCallback 更新 changeRef.current，但不改变函数引用
  const change = useCallback((v: number[]) => {
    changeRef.current.setSelected(v);
  }, []);

  // 在 useEffect 中同步更新 changeRef.current，使其始终是最新的 setSelected
  useEffect(() => {
    changeRef.current = {
      ...changeRef.current,
      setSelected,
    };
  }, [setSelected]);

  return (
    <ListContext.Provider value={{ selected, change }}>
      <div className="wrapper">
        {list.map((_, index) => {
          const isSelect = selected[0] === index;
          return (
            <Com key={index} id={index} isSelect={isSelect} change={change} />
          );
        })}
      </div>
    </ListContext.Provider>
  );
};

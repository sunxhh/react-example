import { useEffect, useRef } from "react";

export const App = function () {
  const wrapper = useRef(null);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        console.log("Loaded new items");
      },
      { root: document.body, threshold: 0.5 }
    );
    // 开始监听
    setTimeout(() => {
      intersectionObserver.observe(wrapper.current!);
    }, 2000);
  }, []);
  return (
    <div>
      <div ref={wrapper}>123</div>
    </div>
  );
};

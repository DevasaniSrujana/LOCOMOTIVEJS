import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.03,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="main" data-scroll-container ref={scrollRef}>
      <div className="page1" data-scroll></div>

      <div className="page2" data-scroll data-scroll-speed="-1">
        <div
          className="box"
          data-scroll
          data-scroll-speed="-3"
          data-scroll-direction="horizontal"
        ></div>

        <div className="box" data-scroll></div>

        <div
          className="box"
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        ></div>
      </div>

      <div className="page3" data-scroll></div>
    </div>
  );
}

export default App;

import { useState } from "react";
import carstyles from "../styles/Carousel.module.css";

export default function Carousel() {
  const update = (num: number, add: number) =>
    (((num + 30) % 3) + add + 30) % 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const clickmap: any = {
    0: 1,
    1: 0,
    2: 2,
  };
  const items = [
    "/index/about/flowernew.png",
    "/index/about/rocky.png",
    "/index/about/wave.png",
  ];
  // const items = [
  //   "/index/about/tienlan.png",
  //   "/index/about/tienlan4.png",
  //   "/index/about/tienlan5.png",
  // ];
  const classes: any = {
    0: carstyles.carousel_item_0,
    1: carstyles.carousel_item_1,
    2: carstyles.carousel_item_2,
  };
  return (
    <div className="flex flex-col h-full text-center">
      <div className="flex flex-row h-full">
        <button
          onClick={() =>
            setActiveIndex((activeIndex) => update(activeIndex, -1))
          }
        >
          <img
            className="scale-125 hover:scale-150 active:mt-1 transition-all ease-in-out max-w-[230px]"
            src="/index/misc/left.svg"
            alt="left arrow"
          />
        </button>
        <div className="flex-1 grid  ">
          <div className="relative w-full grid place-items-center">
            {items.map((item, index) => {
              return (
                <button
                  key={index}
                  className={classes[Math.abs(index + activeIndex) % 3]}
                >
                  <img
                    onClick={() => {
                      setActiveIndex(clickmap[index]);
                    }}
                    className="hover:scale-110 transition-all ease-in-out duration-300 max-w-[230px]"
                    src={item}
                  ></img>
                </button>
              );
            })}
          </div>
        </div>
        <button
          onClick={() =>
            setActiveIndex((activeIndex) => update(activeIndex, 1))
          }
        >
          <img
            className="scale-125 hover:scale-150 active:mt-1 transition-all ease-in-out max-w-[230px]"
            src="/index/misc/right.svg"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  );
}

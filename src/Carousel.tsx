import React, { useEffect, useState } from "react";

interface CarouselProps {
  children: JSX.Element | JSX.Element[];
  width: number;
  height: number;
  speed: number;
  padding: number;
  view: number;
  step: number;
  backButton?: JSX.Element;
  nextButton?: JSX.Element;
}

export default function Carousel({
  children,
  height,
  padding,
  speed,
  step,
  view,
  width,
  backButton,
  nextButton,
}: CarouselProps) {
  const amntMore = view + ((view - step) % 2);
  const moveStep = step < view ? step : view;
  const initIndex = amntMore;

  const [index, setIndex] = useState(initIndex);
  const [animation, setAnimation] = useState(true);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [preventLoop, setPreventLoop] = useState(true);

  const addClones = (array: any[], amount: number) => {
    const newArray = [...array];
    for (let i = 0; i < amount; i++) {
      newArray.unshift(array[array.length - i - 1]);
      newArray.push(array[i]);
    }

    return newArray;
  };

  const childrenArr = React.Children.toArray(children);
  const childrenWithClones = addClones(childrenArr, amntMore);

  const scrollRight = () => {
    if (!scrollDisabled) {
      setPreventLoop(false);
      setScrollDisabled(true);
      setIndex((oldIndex) => oldIndex + moveStep);
    }
  };

  const scrollLeft = () => {
    if (!scrollDisabled) {
      setPreventLoop(false);
      setScrollDisabled(true);
      setIndex((oldIndex) => oldIndex - moveStep);
    }
  };

  const BackButton = backButton ? (
    React.cloneElement(backButton, {
      onClick: () => {
        scrollLeft();
      },
    })
  ) : (
    <button onClick={() => scrollLeft()} type="button">
      Back
    </button>
  );
  const NextButton = nextButton ? (
    React.cloneElement(nextButton, {
      onClick: () => {
        scrollRight();
      },
    })
  ) : (
    <button onClick={() => scrollRight()} type="button">
      Next
    </button>
  );

  useEffect(() => {
    if (!preventLoop) {
      if (index + moveStep > childrenWithClones.length - amntMore) {
        setTimeout(() => {
          const overShoot = index - childrenArr.length;
          const newIndex = overShoot;
          // window.alert(`overShoot: ${overShoot}\nnewIndex: ${newIndex}`);
          setAnimation(false);
          setIndex(newIndex);
        }, speed + 50);
      } else if (index - moveStep < initIndex - view) {
        setTimeout(() => {
          const overShoot = Math.abs(index - initIndex);
          const newIndex = childrenWithClones.length - amntMore - overShoot;
          // window.alert(`overShoot: ${overShoot}\nnewIndex: ${newIndex}`);
          setAnimation(false);
          setIndex(newIndex);
        }, speed + 50);
      }
      setPreventLoop(true);
    }
    setAnimation(true);
  }, [index]);

  useEffect(() => {
    if (scrollDisabled) {
      setTimeout(() => {
        setScrollDisabled(false);
      }, speed + 75);
    }
  }, [scrollDisabled]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {BackButton}
      <div
        style={{
          width: width * view + padding * 2 * view,
          height,
          margin: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: width * childrenWithClones.length,
            height,
            transform: `translateX(-${(width + padding * 2) * index}px)`,
            display: "flex",
            transition: animation ? `transform ${speed}ms ease` : "",
          }}
        >
          {addClones(childrenArr, amntMore).map((c, i) => (
            <li key={`item-${i}`} style={{ padding }}>
              {c}
            </li>
          ))}
        </div>
      </div>
      {NextButton}
    </div>
  );
}

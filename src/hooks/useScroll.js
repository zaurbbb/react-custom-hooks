import {
  useCallback,
  useEffect,
  useRef,
} from "react";

export const useScroll = (
  parentRef,
  childRef,
  callback,
) => {
  const observer = useRef();
  const funcCallback = useCallback(callback, [callback]);

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log("Intersecting");
        funcCallback();
      }
    }, options);

    observer.current.observe(childRef.current);

    return () => {
      observer.current.unobserve(childRef.current);
    }
  }, [funcCallback, childRef, parentRef])
};

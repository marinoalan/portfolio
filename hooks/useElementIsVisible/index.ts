import { RefObject, useEffect, useState } from "react";

const useElementIsVisible = ({
  elementRef,
}: {
  elementRef: RefObject<any>;
}) => {
  const [elementRefIsVisible, setElementRefIsVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const navbar: HTMLElement | null = document.getElementById("navigationBar");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setElementRefIsVisible(entry.isIntersecting);
      },
      { rootMargin: `-${navbar?.clientHeight}px` }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);

  return elementRefIsVisible;
};

export default useElementIsVisible;

import { MutableRefObject, useEffect } from "react";

const useOutsideClick = <T extends HTMLElement>(
  ref: MutableRefObject<T>,
  callback: () => void,
  exceptionsRefs?: MutableRefObject<any>[]
) => {
  const handleOutsideClick = (ev: MouseEvent) => {
    if (
      exceptionsRefs?.some((exception) =>
        exception?.current?.contains(ev.target)
      )
    ) {
      return;
    }

    if (ref.current && !ref.current.contains(ev.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
};

export { useOutsideClick };

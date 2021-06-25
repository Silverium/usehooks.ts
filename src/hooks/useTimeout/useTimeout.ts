import { useEffect } from "react";

export default function useTimeout(callback, delay) {
  useEffect(() => {
    const id = setTimeout(callback, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay, callback]);
}


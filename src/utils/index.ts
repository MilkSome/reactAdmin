import { useEffect, useState } from "react";

export const cleanObject = (object) => {
  const restlt = { ...object };
  Object.keys(restlt).forEach((key) => {
    const value = restlt[key];
    if (value === 0 || !value) {
      delete restlt[key];
    }
  });
  return restlt;
};

//加载时只执行一次方法 接受一个函数
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

//节流
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

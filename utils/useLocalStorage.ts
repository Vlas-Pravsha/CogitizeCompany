import { useState, useEffect, Dispatch, SetStateAction } from "react";

type UseLocalStorage<T> = [T | undefined, Dispatch<SetStateAction<T>>];

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorage<T> {
  const getStoredValue = (): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
  };
  const [storedValue, setStoredValue] = useState<T>(() => getStoredValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
``
import { useState } from "react";

type StorageValue<T> = [T | undefined, (value: T) => void];

function useLocalStorage<T>(key: string, initialValue?: T): StorageValue<T> {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

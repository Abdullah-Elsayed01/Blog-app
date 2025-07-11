import { useEffect, useState } from "react"

export const useDebounced = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value);
    }, delay)
    return () => clearTimeout(time)
  }, [value, delay]);
  return debouncedValue;
}
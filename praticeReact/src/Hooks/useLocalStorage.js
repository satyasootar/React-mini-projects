import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [storeValue, setStoreValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      return JSON.parse(savedValue);
    } else {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setValue = (value) => {
    const newValue = typeof value === 'function' ? value(storeValue) : value;
    setStoreValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storeValue, setValue];
}


/**localStorage hook explanation
 * 1. Create a function with the prefix "use". (This is important to adhere to React's hook conventions.)
 * 2. The function receives two arguments: `key` and `defaultValue`.
 * 3. Initialize the state using a callback function to lazily load the initial value.
 * 4. First, check if a value associated with the `key` exists in `localStorage`.
 * 5. If the value is not present, store the `defaultValue` in `localStorage` and return it; otherwise, return the saved value after parsing it from JSON.
 * 6. The second function, `setValue`, updates both the `localStorage` and the state.
 * 7. First, check if the `value` is a function. If it is, call this function with the previous `storeValue` to compute the new value. Otherwise, use the provided value directly.
 * 8. Update the state with the new value.
 * 9. Save the new value in `localStorage`.
 * 10. The hook returns an array containing `storeValue` and `setValue`.
 */

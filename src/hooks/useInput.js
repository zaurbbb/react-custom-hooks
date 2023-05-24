import { useState } from "react";

export const useInput = (initialValue, callback) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
    callback();
  };

  return {
    value,
    onChange
  };
};

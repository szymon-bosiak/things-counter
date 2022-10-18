import { useState } from "react";

export const useQuantity = (defaultQuantity) => {
  const [value, setValue] = useState(defaultQuantity || 0);

  const onChange = (e) => {
    setValue(+e.target.value);
  };

  return {
    value,
    setValue,
    onChange,
  };
};
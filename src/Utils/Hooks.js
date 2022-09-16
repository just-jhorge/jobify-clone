import { useState } from "react";
import { serializeValue, deserializeValue } from "./data";

export const useLocalState = (defaultValue, stateKey) => {
    const localValue = localStorage.getItem(stateKey);
    const parsedValue = localValue
        ? deserializeValue(localValue)
        : defaultValue;
    const [value, setValue] = useState(parsedValue);

    const setNewValue = (newValue) => {
        setValue((prev) => {
            let val =
                typeof newValue === "function" ? newValue(prev) : newValue;
            localStorage.setItem(stateKey, serializeValue(val));
            return val;
        });
    };

    return [value, setNewValue];
};

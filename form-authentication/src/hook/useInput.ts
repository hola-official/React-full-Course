import { useState, useEffect } from "react";

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue)
    const reset = () => setValue(initValue)

    const attributeObj = {
        value: value,
    }
}
import { useState, useEffect } from "react";

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)))
}

export default useLocalStorage
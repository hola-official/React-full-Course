import { useState, useEffect } from "react";

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initValue)
}

export default useLocalStorage
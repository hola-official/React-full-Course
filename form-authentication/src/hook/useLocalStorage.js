import { useState, useEffect } from "react";

const getLocalValue = (key, initValue) => {
    //SSR Next Js
    if ( typeof window === 'undefined') return initValue
}

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
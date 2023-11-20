import useLocalStorage from "./useLocalStorage"

const useToggle = (key, initValue) => {
    const [value, setValue] = useLocalStorage(key, useLocalStorage)
}

export default useToggle
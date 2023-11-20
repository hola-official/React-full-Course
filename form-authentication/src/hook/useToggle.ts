import useLocalStorage from "./useLocalStorage"

const useToggle = (key, initValue) => {
    const [value, setValue] = useLocalStorage(key, initValue)

    const toggle = (value) => {
        setValue(prev => {
            return typeof value === 'boolean' ? value : !prev
        })
    }
    return [value, toggle] as const;
}

export default useToggle
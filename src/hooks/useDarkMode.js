import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
	const [darkMode, setDarkMode] = useLocalStorage(initialValue);
	return [darkMode, setDarkMode];
};
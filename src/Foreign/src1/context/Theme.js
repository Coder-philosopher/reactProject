import { useContext,createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider
console.log(ThemeProvider);

export default function useTheme() {
    return useContext(ThemeContext)
}
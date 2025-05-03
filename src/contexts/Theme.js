import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

// Named export for useTheme
export function useTheme() {
    return useContext(ThemeContext);
}

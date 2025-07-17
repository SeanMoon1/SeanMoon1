import {createContext, useContext, useState, ReactNode} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("ThemeContext not found");
    return context;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type ThemeProviderProps = {
    children: ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const value = {
        theme,
        toggleTheme,
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
'use client'

import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    isDarkMode: boolean
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    // first time load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")

        if (savedTheme === "dark") {
            setIsDarkMode(true)
        }
    }, [])

    // theme change
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
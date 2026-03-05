import { createContext, useState } from "react";

export const Theme = createContext()

export default function ContextProvider({ children }) {
    const [color, setColor] = useState("light")

    function changeColor() {
        const html = document.querySelector("html")
        const newColor = color == "light" ? "dark" : "light"
        setColor(newColor)

        if (newColor == "dark") {
            html.classList.add("dark")
        } else {
            html.classList.remove("dark")
        }
    }

    return (
        <Theme.Provider value={{ color, changeColor }}>
            {children}
        </Theme.Provider>
    )
    // }
}

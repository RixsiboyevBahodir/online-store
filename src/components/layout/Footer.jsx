import { useContext } from "react"
import { Theme } from "../../context/ThemeContext"

export default function Footer() {

    const { color, changeColor } = useContext(Theme)

    return (
        <div>
            <h1 className=" text-blue-700 dark:text-red-600">{color}</h1>
            <button onClick={changeColor}>change color</button>
        </div>
    )
}

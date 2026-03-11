import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CarouselImg from "../../components/ui/CarouselImg"
import CardWrapper from "../../components/CardWrapper"

export default function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("LoginUser"))
        if (user == null) {
            navigate("/auth")
        }
    }, [])


    function logout() {
        localStorage.clear()
        navigate("/")
    }

    return (
        <div className="content p-4">
            <CarouselImg />
            <CardWrapper />
        </div>
    )
}

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/layout/Navbar"
import CarouselImg from "../../components/ui/CarouselImg"
import Footer from "../../components/layout/Footer"
import CardWrapper from "../../components/CardWrapper"

export default function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("LoginUser"))
        if (user == null) {
            navigate("/")
        }
    }, [])


    function logout() {
        localStorage.clear()
        navigate("/")
    }

    return (
        <div className="content p-4">
            <Navbar />
            <CarouselImg />
            <Footer />
            <CardWrapper/>
        </div>
    )
}

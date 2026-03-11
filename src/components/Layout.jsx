import { Footer } from "antd/es/layout/layout";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="content">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";
import Product from "../pages/products/Product";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
    </div>
  )
}

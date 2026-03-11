import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";
import Product from "../pages/products/Product";
import Layout from "../components/Layout";
import WishList from "../pages/wishlist/WishList";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  )
}

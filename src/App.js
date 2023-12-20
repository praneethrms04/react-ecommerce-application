import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Navbar from "./pages/homepage/navbar/Navbar";

import "./App.css";
const SignUp = lazy(() => import("./pages/signup-page/SignUp"));
const Login = lazy(() => import("./pages/login-page/Login"));
const Products = lazy(() => import("./pages/productspage/Products"));
const ProductDetail = lazy(() => import("./pages/productspage/ProductDetail"));
const CartPage = lazy(() => import("./pages/cart-page/CartPage"));

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="products"
          element={
            <Suspense fallback="Loading...">
              <Products />
            </Suspense>
          }
        />
        <Route
          path="products/:id"
          element={
            <Suspense fallback="Loading...">
              <ProductDetail />
            </Suspense>
          }
        />
        <Route
          path="cart-page"
          element={
            <Suspense fallback="Loading...">
              <CartPage />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback="Loading...">
              <Login />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback="Loading...">
              <SignUp />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;

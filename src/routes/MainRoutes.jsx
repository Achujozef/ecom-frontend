import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import Loader from '../components/loader/Loader'
  const LoginPage = lazy(() => import("../views/Login"));
  const HomePages = lazy(() => import("../views/Home"));
  const UserLoginPage = lazy(() => import("../views/Login"));
  const SignupPage = lazy(()=> import("../views/Register"))
  const ProductList = lazy(()=> import ("../views/ProductList"))
  const MainRoutes = () => {
    return (
      <div>
        
        <Router>
          <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<HomePages />} />
                <Route path="/logout" element={<LoginPage />} />
                <Route path="/userlogin" element={<UserLoginPage />} />
                <Route path="/register" element={<SignupPage />} />
                <Route path="/products" element={<ProductList />} />
            </Routes>
          </Suspense>
        </Router>
        
      </div>
      
    );
  };
  export default MainRoutes;
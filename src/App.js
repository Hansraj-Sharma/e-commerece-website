import { Fragment } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import SingleProductPage from "./pages/singleProductPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signUp' element={<SignUp />}></Route>
          <Route
            path='/singleProductPage/:id'
            element={<SingleProductPage />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

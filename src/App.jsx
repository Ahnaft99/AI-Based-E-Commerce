
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";

import ProtectedRoute from "./Components/ProtectedRoute";
import { fetchProduct } from "./Components/Slice/ProductSlice";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
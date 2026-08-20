import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./Pages/Home";
import { fetchProduct } from "./Components/Slice/ProductSlice";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <Navbar/>
      <Home />
      <Footer/>
    </>
  );
}

export default App;
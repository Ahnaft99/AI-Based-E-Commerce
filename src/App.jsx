import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./Pages/Home";
import { fetchProduct } from "./Components/Slice/ProductSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
import Cart from "./components/Cart/Cart";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/values" element={<Cart />} />
          <Route path="" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

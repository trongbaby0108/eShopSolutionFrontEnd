import './App.css';
import ProductsAdmin from './pages/ProductsAdmin';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import AdminHome from './pages/AdminHome';
import CategoryPage from './pages/CategoryPage';
import DetailProduct from './pages/DetailProduct';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (<>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/" element={<AdminHome />}></Route>
        <Route path="/admin/product" element={<ProductsAdmin />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin/category" element={<CategoryPage />}></Route>
        <Route path="/product/:id" element={<DetailProduct />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>

  )
}

export default App;

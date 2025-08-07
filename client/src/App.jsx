import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Cart from './pages/Cart';
import ScrollToTopOnRefresh from './Components/ScrollToTopOnRefresh ';
import PlaceOrder from './pages/PlaceOrder';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
      <ScrollToTopOnRefresh />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
          </Routes>
        </main>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

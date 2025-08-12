import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
// import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Cart from './pages/Cart';
import ScrollToTopOnRefresh from './Components/ScrollToTopOnRefresh ';
import PlaceOrder from './pages/PlaceOrder';
import Verify from './pages/Verify';
import MyOrders from './pages/MyOrders';
// import Payment from './pages/Payment';

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
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<MyOrders />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
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

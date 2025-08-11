import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddItems from './pages/AddItems';
import ListItems from './pages/ListItems';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        
        <Navbar />

        <div className="flex flex-1">
          
          <Sidebar />

          <main className="flex-1 ml-16 md:ml-64 p-6 bg-white overflow-auto">
            <Routes>
              <Route path="/add-items" element={<AddItems />} />
              <Route path="/list-items" element={<ListItems />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>

        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme="colored" 
        />
      </div>
    </Router>
  );
}

export default App;

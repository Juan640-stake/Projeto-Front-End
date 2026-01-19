import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
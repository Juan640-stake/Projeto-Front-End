import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import MyOrdersPage from './pages/MyOrdersPage/MyOrdersPage';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/categorias" element={<CategoryPage />} />
        <Route path="/meus-pedidos" element={<MyOrdersPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
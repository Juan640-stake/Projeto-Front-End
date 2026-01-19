import React, { useState } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [sortBy, setSortBy] = useState('relevantes');

  const allProducts = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400",
      price: "200"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      price: "200"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
      price: "200",
      priceDiscount: "100"
    }
  ];

  return (
    <div className="product-listing-page">
      <div className="page-container">
        <aside className="filters-sidebar">
          <h3 className="results-title">Resultados para "Tênis" - {allProducts.length} produtos</h3>
          
          <div className="filter-section">
            <label htmlFor="sort-select">Ordenar por</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="relevantes">mais relevantes</option>
              <option value="menor-preco">menor preço</option>
              <option value="maior-preco">maior preço</option>
            </select>
          </div>

          <div className="filter-box">
            <h3>Filtrar por</h3>
            <hr />

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: "Adidas", value: "adidas" },
                { text: "Calenciaga", value: "calenciaga" },
                { text: "K-Swiss", value: "k-swiss" },
                { text: "Nike", value: "nike" },
                { text: "Puma", value: "puma" }
              ]}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Esporte e lazer", value: "esporte" },
                { text: "Casual", value: "casual" },
                { text: "Utilitário", value: "utilitario" },
                { text: "Corrida", value: "corrida" }
              ]}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: "Masculino", value: "masculino" },
                { text: "Feminino", value: "feminino" },
                { text: "Unisex", value: "unisex" }
              ]}
            />

            <FilterGroup
              title="Estado"
              inputType="radio"
              options={[
                { text: "Novo", value: "novo" },
                { text: "Usado", value: "usado" }
              ]}
            />
          </div>
        </aside>

        <main className="products-grid">
          <ProductListing products={allProducts} />
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
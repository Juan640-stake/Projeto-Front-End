import React from 'react';
import './CategoryPage.css';

const CategoryPage = () => {
  const categories = [
    {
      name: "Camisetas",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      total: 120
    },
    {
      name: "Calças",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400",
      total: 85
    },
    {
      name: "Bonés",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
      total: 45
    },
    {
      name: "Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      total: 67
    },
    {
      name: "Tênis",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      total: 203
    },
    {
      name: "Relógios",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      total: 92
    }
  ];

  return (
    <div className="category-page">
      <div className="category-container">
        <h1 className="category-title">Todas as Categorias</h1>
        <p className="category-subtitle">Explore nossos produtos por categoria</p>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={`/produtos?category=${category.name.toLowerCase()}`}
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <span className="category-count">{category.total} produtos</span>
                </div>
              </div>
              
              <div className="category-info">
                <h3>{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
import React from 'react';
import ProductListing from '../../components/ProductListing/ProductListing';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
      price: "200"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
      price: "200",
      priceDiscount: "100"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      price: "200"
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
      price: "200",
      priceDiscount: "100"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-label">Melhores ofertas personalizadas</span>
          <h1 className="hero-title">Queima de<br/>estoque Nike 🔥</h1>
          <p className="hero-description">
            Consequat culpa exercitation mollit nisi excepteur do<br/>
            do tempor laboris eiusmod irure consectetur.
          </p>
          <button className="hero-button">Ver Ofertas</button>
        </div>
        
        <div className="hero-image">
          <div className="circle-bg"></div>
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" 
            alt="Nike Shoe"
            className="shoe-image"
          />
          <div className="ornament-circles">
            <span className="circle active"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
      </section>

      {/* Coleções em Destaque - Cards */}
      <section className="featured-collections">
        <h2>Coleções em destaque</h2>
        
        <div className="collection-cards">
          <div className="collection-card card-blue">
            <span className="discount-badge">30% OFF</span>
            <h3>Novo drop<br/>Supreme</h3>
            <button>Comprar</button>
            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=300" alt="Supreme" />
          </div>

          <div className="collection-card card-purple">
            <span className="discount-badge">30% OFF</span>
            <h3>Coleção<br/>Adidas</h3>
            <button>Comprar</button>
            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300" alt="Adidas" />
          </div>

          <div className="collection-card card-yellow">
            <span className="discount-badge">30% OFF</span>
            <h3>Novo Beats<br/>Bass</h3>
            <button>Comprar</button>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" alt="Beats" />
          </div>
        </div>
      </section>

      {/* Coleções - Ícones */}
      <section className="category-icons">
        <h3>Coleções em destaque</h3>
        <div className="icons-grid">
          <div className="icon-item">
            <div className="icon-circle">👕</div>
            <p>Camisetas</p>
          </div>
          <div className="icon-item">
            <div className="icon-circle">👖</div>
            <p>Calças</p>
          </div>
          <div className="icon-item">
            <div className="icon-circle">🧢</div>
            <p>Bonés</p>
          </div>
          <div className="icon-item">
            <div className="icon-circle">🎧</div>
            <p>Headphones</p>
          </div>
          <div className="icon-item">
            <div className="icon-circle">👟</div>
            <p>Tênis</p>
          </div>
        </div>
      </section>

      {/* Produtos em Alta */}
      <section className="products-section">
        <div className="section-header">
          <h2>Produtos em alta</h2>
          <a href="/produtos" className="ver-todos">Ver todos →</a>
        </div>
        <ProductListing products={featuredProducts} />
      </section>
    </div>
  );
};

export default HomePage;
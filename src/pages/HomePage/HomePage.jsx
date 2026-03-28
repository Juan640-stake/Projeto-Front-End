import React, { useState, useEffect } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing';
import { getProducts, getCategories } from '../../services/api';
import './HomePage.css';

const slides = [
  {
    label: "Melhores ofertas personalizadas",
    title: "Queima de\nestoque Nike 🔥",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    label: "Nova coleção disponível",
    title: "Coleção\nAdidas 2025 ⚡",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"
  },
  {
    label: "Oferta especial",
    title: "Tênis K-Swiss\ncom 50% OFF 🎯",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600"
  },
  {
    label: "Lançamento exclusivo",
    title: "New Balance\nEdição Limitada 👟",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600"
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts({ limit: 8, page: 1 }),
          getCategories({ limit: -1, use_in_menu: true }),
        ]);
        setProducts(productsData.data || []);
        setCategories(categoriesData.data || []);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Formata produtos para o formato que o ProductListing espera
  const formattedProducts = products.map((product) => ({
    name: product.name,
    image: product.images?.[0]?.content || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    price: String(product.price),
    priceDiscount: product.price_with_discount ? String(product.price_with_discount) : undefined,
  }));

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-label">{slides[currentSlide].label}</span>
          <h1 className="hero-title">
            {slides[currentSlide].title.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </h1>
          <p className="hero-description">
            Consequat culpa exercitation mollit nisi excepteur do<br/>
            do tempor laboris eiusmod irure consectetur.
          </p>
          <button className="hero-button">Ver Ofertas</button>
        </div>

        <div className="hero-image">
          <div className="circle-bg"></div>
          <img
            src={slides[currentSlide].image}
            alt="Produto"
            className="shoe-image"
          />
          <div className="ornament-circles">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`circle ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coleções em Destaque */}
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

      {/* Categorias dinâmicas da API */}
      <section className="category-icons">
        <h3>Coleções em destaque</h3>
        <div className="icons-grid">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <div className="icon-item" key={cat.id}>
                <div className="icon-circle">🏷️</div>
                <p>{cat.name}</p>
              </div>
            ))
          ) : (
            <>
              <div className="icon-item"><div className="icon-circle">👕</div><p>Camisetas</p></div>
              <div className="icon-item"><div className="icon-circle">👖</div><p>Calças</p></div>
              <div className="icon-item"><div className="icon-circle">🧢</div><p>Bonés</p></div>
              <div className="icon-item"><div className="icon-circle">🎧</div><p>Headphones</p></div>
              <div className="icon-item"><div className="icon-circle">👟</div><p>Tênis</p></div>
            </>
          )}
        </div>
      </section>

      {/* Produtos em Alta */}
      <section className="products-section">
        <div className="section-header">
          <h2>Produtos em alta</h2>
          <a href="/produtos" className="ver-todos">Ver todos →</a>
        </div>
        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          <ProductListing products={formattedProducts.length > 0 ? formattedProducts : [
            { name: "K-Swiss V8 - Masculino", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", price: "200", priceDiscount: "100" },
            { name: "K-Swiss V8 - Masculino", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", price: "200", priceDiscount: "100" },
          ]} />
        )}
      </section>
    </div>
  );
};

export default HomePage;
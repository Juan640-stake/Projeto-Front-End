import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/logo';
import AuthModal from '../Modal/AuthModal';
import './Header.css';
import Minicar from '../assets/mini-cart.svg';

const Header = () => {
  const { pathname } = useLocation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openLoginModal = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <Logo />
          
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Pesquisar produto..." 
              className="search-input"
            />
            <button className="search-button">
              🔍
            </button>
          </div>

          <div className="auth-area">
            <button onClick={openRegisterModal} className="cadastro-link">
              Cadastre-se
            </button>

            <button onClick={openLoginModal} className="entrar-button">
              Entrar
            </button>
          </div>

          <a href="/carrinho" className="cart-icon">
            <img src={Minicar} alt="Carrinho" />
            <span className="cart-count">2</span>
          </a>
        </div>

        <nav className="nav">
          <a href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</a>
          <a href="/produtos" className={`nav-link ${pathname === '/produtos' ? 'active' : ''}`}>Produtos</a>
          <a href="/categorias" className={`nav-link ${pathname === '/categorias' ? 'active' : ''}`}>Categorias</a>
          <a href="/meus-pedidos" className={`nav-link ${pathname === '/meus-pedidos' ? 'active' : ''}`}>Meus Pedidos</a>
        </nav>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </>
  );
};

export default Header;
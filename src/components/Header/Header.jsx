import React, { useState } from 'react';
import Logo from '../Logo/logo';
import AuthModal from '../Modal/AuthModal';
import './Header.css';
import Minicar from '../assets/mini-cart.svg';

const Header = () => {
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

          {/* ✅ corrigido */}
          <a href="/carrinho" className="cart-icon">
            <img src={Minicar} alt="Carrinho" />
            <span className="cart-count">2</span>
          </a>
        </div>

        <nav className="nav">
          {/* ✅ TODOS com href válido */}
          <a href="/" className="nav-link active">Home</a>
          <a href="/produtos" className="nav-link">Produtos</a>
          <a href="/categorias" className="nav-link">Categorias</a>
          <a href="/meus-pedidos" className="nav-link">Meus Pedidos</a>
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
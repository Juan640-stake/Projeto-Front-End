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
          
          {/* Campo de busca */}
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Pesquisar produto..." 
              className="search-input"
            />
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Área de login/cadastro com modal */}
          <div className="auth-area">
            <button 
              onClick={openRegisterModal}
              className="cadastro-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Cadastre-se
            </button>
            <button 
              onClick={openLoginModal}
              className="entrar-button"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Entrar
            </button>
          </div>

          {/* Carrinho */}
          <a href="" className="cart-icon">
            
            <img src={Minicar} alt="Carrinho" />
            <span className="cart-count">2</span>
          </a>
        </div>

        {/* Navegação */}
        <nav className="nav">
          <a className="nav-link active">Home</a>
          <a href="/produtos" className="nav-link">Produtos</a>
          <a href="/categorias" className="nav-link">Categorias</a>
          <a href="/meus-pedidos" className="nav-link">Meus Pedidos</a>
        </nav>
      </header>

      {/* Modal de Login/Cadastro */}
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
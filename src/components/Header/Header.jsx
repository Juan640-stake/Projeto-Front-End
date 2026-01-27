import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/logo';
import AuthModal from '../Modal/AuthModal';
import './Header.css';

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

          {/* Carrinho - SVG INLINE */}
          <NavLink to="/carrinho" className="cart-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M11 27C11 28.1046 10.1046 29 9 29C7.89543 29 7 28.1046 7 27C7 25.8954 7.89543 25 9 25C10.1046 25 11 25.8954 11 27Z" fill="currentColor"/>
              <path d="M25 27C25 28.1046 24.1046 29 23 29C21.8954 29 21 28.1046 21 27C21 25.8954 21.8954 25 23 25C24.1046 25 25 25.8954 25 27Z" fill="currentColor"/>
              <path d="M7.5 7L9.5 19H24.5L28.5 7H7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 4H6.5L7.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="cart-count">2</span>
          </NavLink>
        </div>

        {/* Navegação */}
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            end
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/produtos" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Produtos
          </NavLink>
          
          <NavLink 
            to="/categorias" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Categorias
          </NavLink>
          
          <NavLink 
            to="/meus-pedidos" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Meus Pedidos
          </NavLink>
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
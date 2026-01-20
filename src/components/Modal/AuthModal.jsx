import React, { useState } from 'react';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose, mode, setMode }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    cpf: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (mode === 'login') {
      console.log('Login:', formData);
      alert('Login realizado com sucesso!');
    } else {
      console.log('Cadastro:', formData);
      alert('Cadastro realizado com sucesso!');
    }
    
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="modal-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            {mode === 'login' ? 'Acesse sua conta' : 'Criar conta'}
          </h2>
          <p className="modal-subtitle">
            {mode === 'login' 
              ? 'Novo cliente? Então registre-se ' 
              : 'Já tem uma conta? '}
            <button 
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="modal-switch-button"
            >
              {mode === 'login' ? 'aqui' : 'Entre aqui'}
            </button>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="modal-form">
          {mode === 'register' && (
            <>
              <div className="form-group">
                <label className="form-label">Nome Completo *</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Insira seu nome"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">CPF *</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="Insira seu CPF"
                  required
                  className="form-input"
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">
              {mode === 'login' ? 'Login *' : 'Email *'}
            </label>
            <div className="input-wrapper">
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Insira seu email"
                required
                className="form-input"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div className="form-group">
              <label className="form-label">Celular *</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.4696 21.5304 20.92 21 20.92H18C8.61116 20.92 1 13.3088 1 3.92C1 3.37041 1.44957 2.92 1.99917 2.92H5C5.55228 2.92 6 3.36772 6 3.92V7.92C6 8.47228 5.55228 8.92 5 8.92H4C4 14.4429 8.47715 18.92 14 18.92V17.92C14 17.3677 14.4477 16.92 15 16.92H19C19.5523 16.92 20 17.3677 20 17.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(85) 98765-4321"
                  required
                  className="form-input"
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Senha *</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Insira sua senha"
                required
                minLength={6}
                className="form-input"
              />
            </div>
          </div>

          {mode === 'login' && (
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                <span>Lembrar-me</span>
              </label>
              <a href="#" className="forgot-password">Esqueci minha senha</a>
            </div>
          )}

          {mode === 'register' && (
            <label className="checkbox-label-full">
              <input type="checkbox" required className="checkbox-input" />
              <span className="checkbox-text">
                Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
              </span>
            </label>
          )}

          <button type="submit" className="submit-button">
            {mode === 'login' ? 'Acessar Conta' : 'Criar Conta'}
          </button>
        </form>

        {/* Social Login (apenas no modo login) */}
        {mode === 'login' && (
          <div className="social-login">
            <div className="divider">
              <span>Ou continue com</span>
            </div>
            
            <div className="social-buttons">
              <button className="social-button">
                <img src="https://www.google.com/favicon.ico" alt="Google" />
                <span>Google</span>
              </button>
              <button className="social-button">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
                <span>Facebook</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
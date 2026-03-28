import React, { useState } from 'react';
import { loginUser, createUser } from '../../services/api';
import './AuthModal.css';

// Toast component
const Toast = ({ message, type }) => (
  <div style={{
    position: 'fixed',
    top: '24px',
    right: '24px',
    zIndex: 99999,
    background: type === 'success' ? '#DB2777' : '#EF4444',
    color: 'white',
    padding: '14px 24px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '15px',
    boxShadow: '0 8px 24px rgba(219,39,119,0.25)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    animation: 'slideIn 0.3s ease-out',
  }}>
    <span>{type === 'success' ? '✅' : '❌'}</span>
    {message}
  </div>
);

export default function AuthModal({ isOpen, onClose, mode, setMode }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    surname: '',
    cpf: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);

  if (!isOpen) return null;

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await loginUser(formData.email, formData.password);

        if (res.token) {
          localStorage.setItem('token', res.token);
          showToast('Login realizado com sucesso!', 'success');
          setTimeout(() => onClose(), 1500);
        } else {
          setError('Email ou senha incorretos.');
        }

      } else {
        const nameParts = formData.firstname.trim().split(' ');
        const firstname = nameParts[0];
        const surname = nameParts.slice(1).join(' ') || firstname;

        if (formData.password !== formData.confirmPassword) {
          setError('As senhas não coincidem.');
          setLoading(false);
          return;
        }

        const res = await createUser({
          firstname,
          surname,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });

        if (res.message === 'Usuário criado com sucesso.') {
          showToast('Cadastro realizado! Faça login.', 'success');
          setTimeout(() => setMode('login'), 1500);
        } else {
          setError(res.message || 'Erro ao cadastrar. Tente novamente.');
        }
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <>
      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} />}

      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>

          {/* Botão fechar */}
          <button onClick={onClose} className="modal-close" type="button">
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
              {mode === 'login' ? 'Novo cliente? Então registre-se ' : 'Já tem uma conta? '}
              <button
                type="button"
                onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}
                className="modal-switch-button"
              >
                {mode === 'login' ? 'aqui' : 'Entre aqui'}
              </button>
            </p>
          </div>

          {/* Erro */}
          {error && (
            <div style={{
              color: '#EF4444',
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: '8px',
              margin: '0 32px',
              padding: '10px 16px',
              fontSize: '14px',
              textAlign: 'center',
            }}>
              ❌ {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="modal-form">

            {mode === 'register' && (
              <>
                <div className="form-group">
                  <label className="form-label">Nome Completo *</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Insira seu nome completo"
                    required
                    className="form-input"
                  />
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

            {mode === 'register' && (
              <div className="form-group">
                <label className="form-label">Celular *</label>
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
            )}

            <div className="form-group">
              <label className="form-label">Senha *</label>
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

            {mode === 'register' && (
              <div className="form-group">
                <label className="form-label">Confirmar Senha *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme sua senha"
                  required
                  minLength={6}
                  className="form-input"
                />
              </div>
            )}

            {mode === 'login' && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span>Lembrar-me</span>
                </label>
                <button type="button" className="forgot-password">
                  Esqueci minha senha
                </button>
              </div>
            )}

            {mode === 'register' && (
              <label className="checkbox-label-full">
                <input type="checkbox" required className="checkbox-input" />
                <span className="checkbox-text">
                  Quero receber por email ofertas e novidades.
                </span>
              </label>
            )}

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Aguarde...' : mode === 'login' ? 'Acessar Conta' : 'Criar Conta'}
            </button>
          </form>

          {/* Social Login */}
          {mode === 'login' && (
            <div className="social-login">
              <div className="divider">
                <span>Ou continue com</span>
              </div>
              <div className="social-buttons">
                <button className="social-button" type="button">
                  <img src="https://www.google.com/favicon.ico" alt="Google" />
                  <span>Google</span>
                </button>
                <button className="social-button" type="button">
                  <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
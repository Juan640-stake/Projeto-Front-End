import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tênis Nike Revolution 6",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      price: 219.90,
      quantity: 1,
      size: "42"
    },
    {
      id: 2,
      name: "Camiseta Adidas Treino",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
      price: 89.90,
      quantity: 2,
      size: "M"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 30.00;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Meu Carrinho</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
              <path d="M9 2L7.17 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4H16.83L15 2H9Z" stroke="#CCCCCC" strokeWidth="2"/>
            </svg>
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione produtos para continuar comprando</p>
            <a href="/produtos" className="btn-primary">Ir às compras</a>
          </div>
        ) : (
          <div className="cart-content">
            {/* Lista de Produtos */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-size">Tamanho: {item.size}</p>
                    <p className="item-price">R$ {item.price.toFixed(2)}</p>
                  </div>

                  <div className="item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    <p className="total-price">R$ {(item.price * item.quantity).toFixed(2)}</p>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="remove-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo do Pedido */}
            <div className="cart-summary">
              <h2>Resumo do Pedido</h2>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Frete:</span>
                <span>R$ {shipping.toFixed(2)}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">
                Finalizar Compra
              </button>

              <a href="/produtos" className="continue-shopping">
                ← Continuar comprando
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
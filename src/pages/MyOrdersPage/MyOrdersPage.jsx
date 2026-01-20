import React, { useState } from 'react';
import './MyOrdersPage.css';

const MyOrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const orders = [
    {
      id: "2234981932",
      date: "15/12/2024",
      status: "Finalizado",
      total: 449.90,
      items: [
        {
          name: "Tênis Nike Revolution 6",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
          quantity: 1,
          price: 219.90
        },
        {
          name: "Camiseta Adidas Treino",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
          quantity: 2,
          price: 115.00
        }
      ]
    },
    {
      id: "2234981933",
      date: "10/01/2025",
      status: "Em trânsito",
      total: 299.90,
      items: [
        {
          name: "Headphone Sony WH-1000XM4",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
          quantity: 1,
          price: 299.90
        }
      ]
    },
    {
      id: "2234981934",
      date: "18/01/2025",
      status: "Processando",
      total: 189.90,
      items: [
        {
          name: "Boné New Era Yankees",
          image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200",
          quantity: 1,
          price: 189.90
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Finalizado':
        return '#52CA76';
      case 'Em trânsito':
        return '#F6AA1C';
      case 'Processando':
        return '#B5B6F2';
      case 'Cancelado':
        return '#EE4266';
      default:
        return '#8F8F8F';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'processing') return order.status === 'Processando';
    if (activeTab === 'transit') return order.status === 'Em trânsito';
    if (activeTab === 'completed') return order.status === 'Finalizado';
    return true;
  });

  return (
    <div className="my-orders-page">
      <div className="orders-container">
        <h1 className="orders-title">Meus Pedidos</h1>
        <p className="orders-subtitle">Acompanhe seus pedidos em tempo real</p>

        {/* Tabs de Filtro */}
        <div className="orders-tabs">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Todos ({orders.length})
          </button>
          <button 
            className={`tab ${activeTab === 'processing' ? 'active' : ''}`}
            onClick={() => setActiveTab('processing')}
          >
            Processando
          </button>
          <button 
            className={`tab ${activeTab === 'transit' ? 'active' : ''}`}
            onClick={() => setActiveTab('transit')}
          >
            Em trânsito
          </button>
          <button 
            className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Finalizados
          </button>
        </div>

        {/* Lista de Pedidos */}
        <div className="orders-list">
          {filteredOrders.length === 0 ? (
            <div className="empty-state">
              <h3>Nenhum pedido encontrado</h3>
              <p>Você ainda não fez nenhum pedido nesta categoria.</p>
              <a href="/produtos" className="btn-primary">Começar a comprar</a>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Pedido #{order.id}</h3>
                    <p className="order-date">Realizado em {order.date}</p>
                  </div>
                  <div className="order-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>Quantidade: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        R$ {item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="order-total">
                    <span>Total do pedido:</span>
                    <strong>R$ {order.total.toFixed(2)}</strong>
                  </div>
                  <div className="order-actions">
                    <button className="btn-secondary">Rastrear pedido</button>
                    <button className="btn-primary">Ver detalhes</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
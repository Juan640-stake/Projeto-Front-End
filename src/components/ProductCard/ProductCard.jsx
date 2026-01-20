import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {priceDiscount && (
          <span className="discount-badge">30% OFF</span>
        )}
        <img src={image} alt={name} />
      </div>
      
      <div className="product-info">
        <p className="product-category">Tênis</p>
        <h3 className="product-name">{name}</h3>
        
        <div className="product-pricing">
          {priceDiscount ? (
            <>
              <span className="price-original">R$ {price}</span>
              <span className="price-discount">R$ {priceDiscount}</span>
            </>
          ) : (
            <span className="price-current">R$ {price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
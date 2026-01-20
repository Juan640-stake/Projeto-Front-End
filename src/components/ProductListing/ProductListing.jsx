import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.css';

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;
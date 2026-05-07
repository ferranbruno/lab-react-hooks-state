import React from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product, onAddToCart }) {

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div
      className={`${styles.card} ${
        !product.inStock ? styles.outOfStock : ''
      }`}
      data-testid={`product-${product.id}`}
    >
      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ${product.price.toFixed(2)}</p>

      <p>
        Status: {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <button
        onClick={handleAddToCart}
        data-testid={`add-to-cart-${product.id}`}
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
import { useEffect, useState } from 'react';

import ProductCard, { ProductFactory } from './ProductCard';
import '../styles/Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products?limit=8');
      const data = await response.json();
      const stock = data.map((product) =>
        ProductFactory(
          product.id,
          product.title,
          product.price,
          product.category,
          product.description,
          product.image
        )
      );
      setProducts(stock);
    }

    fetchData();
  }, []);

  if (products.length === 0) {
    return <div>Shop is Loading...</div>;
  } else {
    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default Shop;

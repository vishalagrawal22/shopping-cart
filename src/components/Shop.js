import { useEffect, useState } from 'react';
import ProductCard, { ProductFactory } from './ProductCard';
import '../styles/Shop.css';
import { useOutletContext } from 'react-router-dom';

function Shop() {
  const [products, setProducts] = useState([]);
  const {
    addItemToCart,
    updateItemInCart,
    deleteItemFromCart,
    isItemInCart,
    getQuantityOfItem,
  } = useOutletContext();

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
          <ProductCard
            key={product.id}
            product={product}
            onAdd={addItemToCart}
            onUpdate={updateItemInCart}
            onDelete={deleteItemFromCart}
            isProductInCart={isItemInCart}
            getQuantityOfProduct={getQuantityOfItem}
          />
        ))}
      </div>
    );
  }
}

export default Shop;

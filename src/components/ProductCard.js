import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './Cart';

import '../styles/ProductCard.css';
import PropTypes from 'prop-types';

function ProductFactory(id, title, price, category, description, image) {
  return { id, title, price, category, description, image };
}

function ProductForm({ product }) {
  const { addItem, deleteItem, updateItem, isItemInCart, getQuantity } =
    useContext(CartContext);

  if (isItemInCart(product)) {
    function onIncrement() {
      const quantity = getQuantity(product);
      updateItem(product, quantity + 1);
    }

    function onDecrement() {
      const quantity = getQuantity(product);
      if (quantity > 1) {
        updateItem(product, quantity - 1);
      }
    }

    function getQuantityInCart() {
      return getQuantity(product);
    }

    function deleteFromCart() {
      deleteItem(product);
    }

    return (
      <div className="product-controls">
        <div>Quantity</div>
        <div className="quantity-controls">
          <button onClick={onDecrement}>-</button>
          <div>{getQuantityInCart()}</div>
          <button onClick={onIncrement}>+</button>
        </div>
        <div className="cart-controls">
          <button onClick={deleteFromCart}>Remove from cart</button>
        </div>
      </div>
    );
  } else {
    function addToCart() {
      addItem(product);
    }

    return (
      <div className="product-controls">
        <div className="cart-controls">
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

function ProductCard({ product }) {
  let navigate = useNavigate();
  function moveToProductPage() {
    navigate(`/shop/${product.id}`);
  }
  return (
    <div className="product-item" id={product.id}>
      <div className="product-item-details" onClick={moveToProductPage}>
        <h3>{product.title}</h3>
        <h5>{product.category}</h5>
        <img src={product.image} alt={product.title} />
        <h4>${product.price}</h4>
      </div>
      <ProductForm product={product} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ProductCard;
export { ProductFactory, ProductForm };

import { useState, useContext, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { deepCopy } from '../utils/helper-functions';
import ProductCard from './ProductCard';
import '../styles/Cart.css';
import cartSrc from '../images/cart.png';

function CartItem(product, quantity) {
  return { product, quantity };
}

function useCart() {
  const [cartList, setCartList] = useState({});

  let addItem = (product) => {
    setCartList((oldCartList) => {
      return { ...oldCartList, [product.id]: CartItem(product, 1) };
    });
  };

  let deleteItem = (product) => {
    setCartList((oldCartList) => {
      let newCartList = deepCopy(oldCartList);
      delete newCartList[product.id];
      return { ...newCartList };
    });
  };

  let updateItem = (product, quantity) => {
    setCartList((oldCartList) => {
      return { ...oldCartList, [product.id]: CartItem(product, quantity) };
    });
  };

  let isItemInCart = (product) => {
    if (cartList.hasOwnProperty(product.id)) {
      return true;
    } else {
      return false;
    }
  };

  let getQuantity = (product) => {
    if (isItemInCart(product)) {
      return cartList[product.id].quantity;
    } else {
      return undefined;
    }
  };

  let getProducts = () => {
    const products = [];
    for (const key of Object.keys(cartList)) {
      products.push(cartList[key].product);
    }
    return products;
  };

  let getItemCount = () => {
    return Object.keys(cartList).length;
  };

  let getTotalCost = () => {
    let cost = 0;
    for (const key of Object.keys(cartList)) {
      cost += cartList[key].product.price * cartList[key].quantity;
    }
    return cost;
  };

  let clearCart = () => {
    setCartList({});
  };

  let placeOrder = () => {
    alert('This feature has not been implemented yet!');
  };

  return {
    addItem,
    deleteItem,
    updateItem,
    isItemInCart,
    getQuantity,
    getProducts,
    getItemCount,
    getTotalCost,
    clearCart,
    placeOrder,
  };
}

const CartContext = createContext();

function Cart() {
  const { getProducts, clearCart, placeOrder } = useContext(CartContext);
  const products = getProducts();
  if (products.length === 0) {
    return <div className="empty-card-message">Cart is empty!</div>;
  } else {
    return (
      <div className="cart-container">
        <div className="cart-actions">
          <button className="clear-cart" onClick={clearCart}>
            Clear cart
          </button>
          <button className="place-order" onClick={placeOrder}>
            Place order
          </button>
        </div>
        <div className="cart-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

function CartSummary() {
  const { getItemCount, getTotalCost } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  function goToCart() {
    navigate('/cart');
  }

  return (
    <div className="cart-summary">
      <img src={cartSrc} alt="cart" />
      <div>Number of items: {getItemCount()}</div>
      <div>Total cost: ${getTotalCost().toFixed(2)}</div>
      {location.pathname === '/cart' ? null : (
        <button onClick={goToCart}>Go to cart</button>
      )}
    </div>
  );
}

export default Cart;
export { useCart, CartSummary, CartContext };

import { useState, useContext, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { deepCopy } from '../utils/helper-functions';
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
    const products = cartList.map((cartItem) => cartItem.product);
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

  return {
    addItem,
    deleteItem,
    updateItem,
    isItemInCart,
    getQuantity,
    getProducts,
    getItemCount,
    getTotalCost,
  };
}

function Cart() {
  return <div></div>;
}

const CartContext = createContext();

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

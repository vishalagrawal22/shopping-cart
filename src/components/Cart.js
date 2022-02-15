import { useState, createContext } from 'react';
import { deepCopy } from '../utils/helper-functions';

function CartItem(product, quantity) {
  return { product, quantity };
}

function useCart() {
  const [cartList, setCartList] = useState({});

  let cart = (function (cartList, setCartList) {
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

    return {
      addItem,
      deleteItem,
      updateItem,
      isItemInCart,
      getQuantity,
      getProducts,
    };
  })(cartList, setCartList);

  return cart;
}

function Cart() {
  return <div></div>;
}

const CartContext = createContext();

export default Cart;
export { useCart, CartContext };

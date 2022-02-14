import { Outlet } from 'react-router-dom';

import './styles/App.css';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState({});
  function addItemToCart(id) {
    setCart((cart) => {
      return { ...cart, [id]: 1 };
    });
  }

  function updateItemInCart(id, quantity) {
    setCart((cart) => {
      return { ...cart, [id]: quantity };
    });
  }

  function deleteItemFromCart(id) {
    setCart((cart) => {
      const copyCart = { ...cart };
      delete copyCart[id];
      return copyCart;
    });
  }

  function isItemInCart(id) {
    return cart.hasOwnProperty(id);
  }

  function getQuantityOfItem(id) {
    return cart[id];
  }

  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
        <Nav />
      </header>
      <main>
        <Outlet
          context={{
            addItemToCart,
            updateItemInCart,
            deleteItemFromCart,
            isItemInCart,
            getQuantityOfItem,
          }}
        />
      </main>
      <footer>
        <p>
          Shopping cart icons created by
          <a
            href="https://www.flaticon.com/free-icons/shopping-cart"
            title="shopping cart icons"
          >
            Freepik - Flaticon
          </a>
        </p>
        <p>
          Product data from
          <a href="https://fakestoreapi.com/">Fake Store API</a>
        </p>
      </footer>
    </>
  );
}

export default App;

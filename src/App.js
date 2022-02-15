import { Outlet } from 'react-router-dom';

import './styles/App.css';
import Nav from './components/Nav';
import { useCart, CartContext } from './components/Cart';

function App() {
  const cart = useCart();
  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
        <Nav />
      </header>
      <main>
        <CartContext.Provider value={cart}>
          <Outlet />
        </CartContext.Provider>
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

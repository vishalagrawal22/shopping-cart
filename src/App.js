import { Outlet } from 'react-router-dom';

import './styles/App.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
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

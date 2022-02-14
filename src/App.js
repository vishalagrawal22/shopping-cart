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
    </>
  );
}

export default App;

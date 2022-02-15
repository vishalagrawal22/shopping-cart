import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Product from './components/Product';
import Shop from './components/Shop';

render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products">
            <Route
              index
              element={
                <div>
                  Append product id to the end of url to view a product.
                </div>
              }
            />
            <Route path=":productID" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Home';

render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<div>Hello from shop!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

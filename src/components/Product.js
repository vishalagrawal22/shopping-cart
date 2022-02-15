import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductFactory } from './ProductCard';
import '../styles/Product.css';

function Product() {
  const { productID } = useParams();
  const [product, setProduct] = useState(ProductFactory());
  useEffect(() => {
    async function fetchProduct(id) {
      const respone = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await respone.json();
      if (data !== null) {
        return ProductFactory(
          data.id,
          data.title,
          data.price,
          data.category,
          data.description,
          data.image
        );
      } else {
        return ProductFactory(null);
      }
    }

    async function setup() {
      setProduct(await fetchProduct(productID));
    }

    setup();
  }, [productID]);

  if (product.id === null) {
    return <div>Product not found!</div>;
  } else if (product.id === undefined) {
    return <div>Product is loading...</div>;
  } else {
    return (
      <div className="product-container">
        <div className="product-details" id={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <h5>{product.category}</h5>
          <p>{product.description}</p>
          <h4>Price: ${product.price}</h4>
        </div>
      </div>
    );
  }
}

export default Product;

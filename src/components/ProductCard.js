import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductFactory(id, title, price, category, description, image) {
  return { id, title, price, category, description, image };
}

function ProductForm({
  product,
  onAdd,
  onUpdate,
  onDelete,
  isProductInCart,
  getQuantityOfProduct,
}) {
  if (isProductInCart(product.id)) {
    function onIncrement() {
      const quantity = getQuantityOfProduct(product.id);
      onUpdate(product.id, quantity + 1);
    }

    function onDecrement() {
      const quantity = getQuantityOfProduct(product.id);
      if (quantity > 1) {
        onUpdate(product.id, quantity - 1);
      }
    }

    function getQuantity() {
      return getQuantityOfProduct(product.id);
    }

    function deleteFromCart() {
      onDelete(product.id);
    }

    return (
      <div className="product-controls">
        <div>Quantity</div>
        <div className="quantity-controls">
          <button onClick={onDecrement}>-</button>
          <div>{getQuantity()}</div>
          <button onClick={onIncrement}>+</button>
        </div>
        <div className="cart-controls">
          <button onClick={deleteFromCart}>Remove from cart</button>
        </div>
      </div>
    );
  } else {
    function addToCart() {
      onAdd(product.id);
    }

    return (
      <div className="product-controls">
        <div className="cart-controls">
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}

function ProductCard({
  product,
  onAdd,
  onUpdate,
  onDelete,
  isProductInCart,
  getQuantityOfProduct,
}) {
  let navigate = useNavigate();
  function moveToProductPage() {
    navigate(`/products/${product.id}`);
  }
  return (
    <div className="product-item" id={product.id}>
      <div className="product-item-details" onClick={moveToProductPage}>
        <h3>{product.title}</h3>
        <h5>{product.category}</h5>
        <img src={product.image} alt={product.title} />
        <h4>${product.price}</h4>
      </div>
      <ProductForm
        product={product}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onDelete={onDelete}
        isProductInCart={isProductInCart}
        getQuantityOfProduct={getQuantityOfProduct}
      />
    </div>
  );
}

export default ProductCard;
export { ProductFactory };

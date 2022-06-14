import './product-in-cart.styles.scss';
import { useContext } from 'react';
import { DropDownContext } from '../../context/drop-down.context';

const ProductInCart = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { cartItems, setCartItems } = useContext(DropDownContext);

  const addProductQuantityBy1 = () => {
    cartItem.quantity++;
    console.log(cartItem);
    setCartItems([...cartItems], { ...cartItem });
  };

  const reduceProductQuantityBy1 = () => {
    if (cartItem.quantity <= 1) return deleteProduct();
    cartItem.quantity--;
    console.log(cartItem);
    setCartItems([...cartItems], { ...cartItem });
  };

  const deleteProduct = () => {
    const productToDelete = cartItems.findIndex(
      (item) => item.id === cartItem.id
    );
    console.log(productToDelete);
    cartItems.splice(productToDelete, 1);
    setCartItems([...cartItems]);
  };

  return (
    <div className='products-container-checkout'>
      <img className='image' src={imageUrl} alt={name} />
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='quantity-container'>
          <button className='decrease' onClick={reduceProductQuantityBy1}>
            &lt;
          </button>
          <span>{quantity}</span>
          <button className='increase' onClick={addProductQuantityBy1}>
            &gt;
          </button>
        </div>
      </span>
      <span className='price'>{price}</span>
      <button className='remove' onClick={deleteProduct}>
        x
      </button>
    </div>
  );
};

export default ProductInCart;

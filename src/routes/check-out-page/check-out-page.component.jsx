import './check-out-page.styles.scss';
import ProductInCart from '../../Components/product-in-cart/product-in-cart.component.jsx';
import { useContext } from 'react';
import { DropDownContext } from '../../context/drop-down.context';

const CheckOutPage = () => {
  const { cartItems } = useContext(DropDownContext);

  const totalPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  console.log(totalPrice);
  console.log(cartItems);
  return (
    <div className='confirmation-container'>
      <div className='information-container'>
        <span>Image</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className='details-container'>
        {cartItems.map((cartItem) => {
          return (
            <ProductInCart
              cartItem={cartItem}
              key={cartItem.id}
              className='product-in-cart'
            ></ProductInCart>
          );
        })}
      </div>
      <h2 className='total-price'>TOTAL: ${totalPrice}</h2>
      <span className='alert'>
        *Please use the following test credit card for payments*
      </span>
    </div>
  );
};

export default CheckOutPage;

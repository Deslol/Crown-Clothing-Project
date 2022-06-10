import Button from '../button/button.component.jsx';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart items'></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;

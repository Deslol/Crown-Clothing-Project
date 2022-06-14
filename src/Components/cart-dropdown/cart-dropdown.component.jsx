import Button from '../button/button.component.jsx';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component.jsx';
import { DropDownContext } from '../../context/drop-down.context.jsx';

const CartDropDown = () => {
  const { cartItems } = useContext(DropDownContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>
        <Link to='/check-out' className='check-out-btn'>
          GO TO CHECKOUT
        </Link>
      </Button>
    </div>
  );
};

export default CartDropDown;

import { useContext } from 'react';

import './cart-icon.styles.scss';

import { DropDownContext } from '../../context/drop-down.context.jsx';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(DropDownContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  // cartItems.length > 0
  //   ? cartItems.reduce((accumulator, cartItem) => {
  //       return accumulator.quantity + cartItem.quantity;
  //     })
  //   : cartItems;

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>
        {/* {cartItems.length > 0
          ? cartItems.reduce((accumulator, cartItem) => {
              return accumulator + cartItem.quantity;
            }, 0)
          : 0} */}
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;

import { useContext } from 'react';

import './cart-icon.styles.scss';

import { DropDownContext } from '../../context/drop-down.context.jsx';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(DropDownContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;

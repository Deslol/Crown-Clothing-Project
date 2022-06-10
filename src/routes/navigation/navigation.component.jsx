import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../Components/cart-icon/cart-icon.component.jsx';
import CartDropDown from '../../Components/cart-dropdown/cart-dropdown.component.jsx';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context.jsx';
import { DropDownContext } from '../../context/drop-down.context.jsx';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import './navigation.styles.scss';

const Navigation = () => {
  const {
    currentUser,
    // setCurrentUser
  } = useContext(UserContext);
  // console.log(currentUser);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };

  const { isCartOpen } = useContext(DropDownContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

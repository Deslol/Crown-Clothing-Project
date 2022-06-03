import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { Fragment } from 'react';

import Button from '../../Components/button/button.component.jsx';
import SignInForm from '../../Components/sign-in-form/sign-in-form.component.jsx';
import SignUpForm from '../../Components/sign-up-form/sign-up-form.component.jsx';

const Authentication = () => {
  return (
    <Fragment>
      <SignInForm />
      <SignUpForm />
    </Fragment>
  );
};

export default Authentication;

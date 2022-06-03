import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../Components/sign-up-form/sign-up-form.component.jsx';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

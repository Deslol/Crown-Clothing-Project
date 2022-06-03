import './sign-in-form.styles.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(formFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {}
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
    console.log('clicked');
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            name: 'email',
            onChange: changeHandler,
            value: email,
          }}
        />
        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            name: 'password',
            onChange: changeHandler,
            value: password,
          }}
        />
        <div className='buttons-container'>
          <Button type='submit'>SIGN IN</Button>
          <Button onClick={signInWithGoogle} buttonType='google'>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

import { UserContext } from '../../context/user.context.jsx';

import './sign-up-form.style.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  console.log('hit');

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else console.error('user creation encountered an error', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target, name);

    setFormFields({ ...formFields, [name]: value });
  };

  //   return (
  //     <div>
  //       <h1>Sign up with your email and password</h1>
  //       <form onSubmit={handleSubmit}>
  //         <FormInput
  //           label='Display Name'
  //           type='text'
  //           required
  //           onChange={handleChange}
  //           name='displayName'
  //           value={displayName}
  //         />

  //         <FormInput
  //           label='Email'
  //           type='email'
  //           required
  //           onChange={handleChange}
  //           name='email'
  //           value={email}
  //         />

  //         <FormInput
  //           label='Password'
  //           type='password'
  //           required
  //           onChange={handleChange}
  //           name='password'
  //           value={password}
  //         />

  //         <FormInput
  //           label='Confirm Password'
  //           type='password'
  //           required
  //           onChange={handleChange}
  //           name='confirmPassword'
  //           value={confirmPassword}
  //         />
  //         <button type='submit'>Sign Up</button>
  //       </form>
  //     </div>
  //   );
  // };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          inputOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'displayName',
            value: displayName,
          }}
        />

        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />

        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />

        <FormInput
          label='Confirm Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'confirmPassword',
            value: confirmPassword,
          }}
        />
        <Button buttonType='default' type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

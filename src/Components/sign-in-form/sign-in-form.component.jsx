import './sign-in-form.styles.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import {
  useState,
  // useContext
} from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component';

// import { UserContext } from '../../context/user.context.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => setFormFields(defaultFormFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //   console.log(error);
  //   if (error.code === 'auth/wrong-password')
  //     alert('Incorrect password for Email');
  // }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // const { user } = await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      resetFormFields();
      //   console.log(user);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
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
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

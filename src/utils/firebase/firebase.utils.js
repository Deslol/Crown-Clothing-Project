import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBpcdrzRW0QejXgpP--mRAOpQlhPqEQCT0',
  authDomain: 'crown-clothing-react-911.firebaseapp.com',
  projectId: 'crown-clothing-react-911',
  storageBucket: 'crown-clothing-react-911.appspot.com',
  messagingSenderId: '145800832129',
  appId: '1:145800832129:web:2ac6eba6e42efdb9cb5980',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // Check if user data exists
  // if user data doesn't exist, create and set the document with the data from userAuth in our collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // if exist, return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// export const createUserDocumentFromEmailAndPassword = async (userAuth) => {
//   console.log(userAuth);
//   const { email, displayName } = userAuth;
//   const createdAt = new Date();
//   const userSnapshot = await getDoc(userAuth);

//   console.log(userSnapshot);
//   if (!userSnapshot.exists()) {
//     try {
//       await setDoc(userAuth, {
//         displayName,
//         email,
//         createdAt,
//       });
//       console.log(userSnapshot);
//     } catch (error) {
//       console.log('error creating the user', error.message);
//     }
//   }
// };

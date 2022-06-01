import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpcdrzRW0QejXgpP--mRAOpQlhPqEQCT0",
  authDomain: "crown-clothing-react-911.firebaseapp.com",
  projectId: "crown-clothing-react-911",
  storageBucket: "crown-clothing-react-911.appspot.com",
  messagingSenderId: "145800832129",
  appId: "1:145800832129:web:2ac6eba6e42efdb9cb5980",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

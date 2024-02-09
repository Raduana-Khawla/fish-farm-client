import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const googleSignIn = async () => {
    setLoading(true);
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);

      // get and set token
      if (currentUser) {
        axios
          .post("https://raduana-khawla.onrender.com/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log(data.data.token)
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

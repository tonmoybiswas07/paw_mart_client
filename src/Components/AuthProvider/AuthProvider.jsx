import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { AuthContext } from "../AuthContext/AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const sendEmailVerificationFunc = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const signInWithEmailAndPasswordFunc = async (email, password) => {
    setLoading(true);
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);


      if (methods.includes("google.com") && !methods.includes("password")) {
        throw new Error(
          "This email is registered via Google. Please use Google login."
        );
      }

      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res.user.emailVerified) {
        throw new Error("Please verify your email before logging in.");
      }

      return res;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogleFunc = async () => {
    setLoading(true);
    try {
      const res = await signInWithPopup(auth, googleProvider);
      return res;
    } catch (e) {
      if (e.code === "auth/account-exists-with-different-credential") {
        throw new Error(
          "This email is already registered with a different provider. Try logging in with that."
        );
      }
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const signoutUserFunc = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    signoutUserFunc,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

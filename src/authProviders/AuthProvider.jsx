import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

function AuthProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // sign in user create
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign in with google
  const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // sign out 
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  // onAuthStateChanged 
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe
    };
  }, [])

  const userAuthInfo = {
    user,
    createUser,
    signInUser,
    signInGoogle,
    logOut,
    loading
  }

  return (
    <AuthContext.Provider value={userAuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

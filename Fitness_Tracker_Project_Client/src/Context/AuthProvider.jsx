/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../Config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GetRole, GetToken, SaveUserInDb, uploadImage } from "../Utils/Utils";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import Loading from "../assets/Animation/Loading.json";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const SignUp = async (name, email, password, formData) => {
    try {
      const photoUrl = await uploadImage(formData);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result.user) {
        await UpdateUserFirebase(name, photoUrl);
        const mongoDBSaveResult = await SaveUserInDb(result.user);
        await GetToken(result.user);
        if (mongoDBSaveResult.data.insertedId) {
          toast.success("User creat successful");
        }
      }
    } catch (err) {
      toast.error(`${err.code}`);
      return err;
    }
  };

  const SignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await GetToken(email);
      toast.success("Log In successful");
    } catch (err) {
      toast.error(`${err.code}`);
      return err;
    }
  };

  const socialLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const mongoDBSaveResult = await SaveUserInDb(result.user);
      await GetToken(result.user.email);
      if (mongoDBSaveResult?.data?.acknowledged) {
        return toast.success("User creat successful");
      }
      toast.success("Log In successful");
    } catch (err) {
      toast.error(err.code);
      return err;
    }
  };

  const SignOut = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
  };

  const UpdateUserFirebase = async (
    name = user.name,
    photoUrl,
    fromOtherPage
  ) => {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });

    //creat updated user after when UpdateUserFirebase call from other page and set new user in AuthContext by setUser function call
    if (fromOtherPage) {
      const updatedUser = { ...user };
      updatedUser.displayName = name;
      updatedUser.photoURL = photoUrl;
      return setUser(updatedUser);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  const authInfo = {
    loading,
    SignUp,
    user,
    UpdateUserFirebase,
    socialLogin,
    SignIn,
    SignOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? <Lottie animationData={Loading} loop={true} /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

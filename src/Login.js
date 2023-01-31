import React, { useState } from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Login.css"
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';



function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) { return alert("Please enter full name") };

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, { displayName: name,photoURL:profilePic })
          .then(() => {
            dispatch(login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: name,
              photoURl: profilePic,
            }))
          })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: name,
          photoURl: profilePic,
        }))
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png" alt="" />

      <form action="">
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full Name (required if registering)' />
        <input value={profilePic} onChange={e => setprofilePic(e.target.value)} type="text" placeholder='Profile Picture URl (Optional)' />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{" "}
        <span className='login_register' onClick={register}>Register now</span>
      </p>
    </div>
  )
}

export default Login;
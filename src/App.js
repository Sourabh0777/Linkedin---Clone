import './App.css';
import React, { useEffect } from 'react';
// Components
import Login from './Login';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
// Firebase 
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './features/userSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email:user.email,
          uid:user.uid,
          displayName: user.displayName,
          photoURL: user.photoURl,
        }))
      } else {
        dispatch(logout())
      }
    });
  }, [])
  

  const user = useSelector((state)=>state.user.value);
  return (
    <div className="app">
      <Header />
      {! user ? (
        <Login />
      ) : (
        <div className="app_body">
          <SideBar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import { Header } from "./Components/Header.js";
import { Home } from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Checkout } from './Components/Checkout'
import { Login } from './Components/Login';
import { auth } from './Firebase/setup';
import { useStateValue } from './Components/StateProvider';
import { Payment } from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { Orders } from './Components/Orders';
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from './Components/Features/Reducer';

const promise = loadStripe('pk_test_51LVX5ZCaBHPQkgQPXIC07oHcA1RmTjxk55rOulWo5cTigJYZaivTJEU7GAa2VsuHTaZZoFTz3IMigy6jVX8CUW0L00lOg7TTQr');

function App() {
  // const [{ }, dispatch] = useStateValue();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log("hello")
        dispatch(SET_USER({ user: authUser }))
      } else {
        dispatch(SET_USER({ user: null }))
      }
      // console.log(authUser)
      // if (authUser) {
      //   //user just logged in/sign in
      //   dispatch({
      //     type: 'SET_USER',
      //     user: authUser
      //   })
      // } else {
      //   //user logged out
      //   dispatch({
      //     type: 'SET_USER',
      //     user: null
      //   })
      // }

    })
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<><Login /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/orders' element={<><Header /><Orders /></>} />
          <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
          <Route exact path='/' element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

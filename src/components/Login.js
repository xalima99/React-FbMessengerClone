import React from "react";
import {signInWithGoogle} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'


const Login = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  if(auth.authenticated){
    return <Redirect to={"/dashboard"} />
  }

  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://www.hipaaguide.net/wp-content/uploads/2018/05/Facebook_Messenger.png"
          alt="logo"
          id="loginlogo"
        />
        <strong>Sign in to Amadou Fall HQ</strong>
        <p>Hello, Welcome to my Messenger Clone made With React(Hooks), Redux and Firebase. Please use a desktop for full experience.</p>
        <button onClick={() => dispatch(signInWithGoogle)}
        className="mt-5 block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;

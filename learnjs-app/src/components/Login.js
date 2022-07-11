import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={()=>{
          dispatch (login({name:'Tiago', age: 40, email: 'Gonzalez.tiago@teste.com.br'}));
        }}
      > 
        Login 
      </button>
    
    <button
      onClick={()=>{
        dispatch(logout());
      }}
    >
      Logout
    </button>
    </div>
  )
}

export default Login

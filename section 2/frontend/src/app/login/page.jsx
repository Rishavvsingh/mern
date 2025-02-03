import React from 'react'
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h1 className='text-center font-bold my-10 text-3xl'>Login page</h1>
        <button className='Global-btn'>Login button</button>
        <button className={classes.localBtn}>Local button</button>
    </div>
  )
}

export default Login;
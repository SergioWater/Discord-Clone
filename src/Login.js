import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from "./firebase";


function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>

        <div className="login__logo">
        <img src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg" alt="" />

        </div>

        <Button onClick={signIn}>Sign in</Button>


    </div>
  )
}

export default Login

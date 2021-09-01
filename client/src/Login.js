import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue} from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
   const [state, dispatch] = useStateValue()

   const signIn = () => {
      auth.signInWithPopup(provider)
      .then((result) => {
         dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
         })
         console.log(result.user);
      }).catch((error) => {
         console.log(error.message);
      })
   }
   return (
      <div className="login">
         <div className="login_logo">
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
               alt="" />
            <img
               src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
               alt="" />
         </div>
         <Button type="submit" onClick={signIn}>
            Sign In
         </Button>
      </div>
   )
}

export default Login

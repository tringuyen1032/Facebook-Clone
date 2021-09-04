import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider, realtimeDB } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import { useRouter, userRouter } from 'next/router'

function Login() {
   const [state, dispatch] = useStateValue()

   const signIn = () => {
      auth.signInWithPopup(provider)
         .then((result) => {
            dispatch({
               type: actionTypes.SET_USER,
               user: result.user,
            })
            realtimeDB.ref('users').orderByChild('user').equalTo(result.user.email).on("value", function (snapshot) {
               if (snapshot.val() != null) {
                  const updates = {};
                  const key = Object.keys(snapshot.val())[0]
                  updates[`users/${key}/status`] = true;
                  realtimeDB.ref().update(updates)
               } else {
                  realtimeDB.ref('users').push({
                     user: result.user.email,
                     photoURL: result.user.photoURL,
                     displayName: result.user.displayName,
                     status: true
                  })
               }
            });
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

import app from './firebase.init';
import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth()

function App() {
const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = ()=>{
  signInWithPopup(auth, googleProvider)
  .then((result) =>{
    const user = result.user
    setUser(user)
    console.log(user)
  })
  .catch((error)=>{
    console.error(error)
  })
  }

  const handleGithubSignIn= ()=>{
   signInWithPopup(auth, githubProvider)
   .then((result) =>{
    const user = result.user
    setUser(user)
   })
   .catch((error)=>{
    console.error(error)
   })
  }

  const handleSignOut = ()=>{
    signOut(auth)
    .then(()=>{
      setUser('')
    })
    .catch((error)=>{
      console.error(error)
    })

  }

  return (
    <div className="App">
     { user.email? <button onClick={handleSignOut} className='bg-red-500 p-3 m-3 rounded-lg shadow-lg text-white font-bold'>Sign Out</button>:
     <div>
       <button onClick={handleGoogleSignIn} className='bg-green-500 p-3 m-3 rounded-lg shadow-lg text-white font-bold'>Google Sign In</button>
      <button onClick={handleGithubSignIn} className='bg-blue-500 p-3 m-3 rounded-lg shadow-lg text-white font-bold'>Github Sign In</button>
     </div>
    }
     <h1> Your Name: {user.displayName}</h1>
     <h1> Your Email: {user.email}</h1>
     
    </div>
  );
}

export default App;

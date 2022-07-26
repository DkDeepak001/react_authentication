import React, { useState } from 'react';
import './App.css';
import "./auth";
import { auth, googleProvider } from './auth';

function App() {

  const [user,setUser] = useState(null);

  const googleSigin = async() => {
    try {
        await auth.signInWithPopup(googleProvider);
        setUser(await auth.currentUser);
    }catch(error){ 
      console.log(error)
    }
  }
  return (
    <div className="App">
     <h3>React Authentication</h3>
     <section>
        <button className='button-container' onClick={googleSigin}>
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google icon" />
          <p>sigin with google</p>
        </button>
        <button className='button-container'>
          <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="fb icon"/>
          <p>sigin with facebook</p>
        </button>
        <button className='button-container'>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon"/>
          <p>sigin with github</p>
        </button>
     </section>
     <h4>{user === null ? "email" : user.displayName}</h4>
     <h4>{user === null ? "email" : user.email}</h4>
    </div>
  );
}

export default App;

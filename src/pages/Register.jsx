import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from 'react';
import { auth, storage } from '../firebase';
import Add from '../img/addAvatar.png';

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      console.log(res.user)

      // Register three observers:
      uploadTask.on(

        
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch(err){
      setErr(true);
    }

      
  }


  return (
    <div className="formContainer">
      <div className="formWrapper">
       <span className="logo">RushApp</span>
       <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display Name' />
          <input type="email"placeholder='Email'  />
          <input type="password" placeholder='Password'  />
          <input style={{display: 'none'}} type="file"id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account ? Login </p>
      </div>
    </div>
  )
}

export default Register
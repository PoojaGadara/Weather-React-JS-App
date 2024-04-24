import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase'
import '../../App.css'

export default function SignIn() {
        const [email , setEmail] = useState('')
        const [password , setPassword] = useState('')
        const navigate = useNavigate()
        const signIn = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword (auth , email , password)
            .then((userCredential) => {
                navigate('/home')
                console.log(userCredential)
            }).catch((error)=> {
                console.log(error)
            })
        }

  return (
    <div className='bg'>
    <div className="my-5">
        <h1 className='text-center'>Login</h1>
    </div>
    <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={signIn}>
                       

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email"
                         class="form-control" 
                         id="exampleFormControlInput1"
                         name="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Enter Your Email address" required
                         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password"
                         class="form-control" 
                         id="exampleFormControlInput1"
                         name="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder="Enter Your Password" required/>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">
                                Login
                            </button>
                        </div>

                </form>
            </div>
        </div>
    </div>
</div>
  )
}

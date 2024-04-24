import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth ,firestore } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore';

export default function SignUp() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    console.log(username , email, password)

    const user = collection(firestore, 'users');

    const signUp = async (e) => {
        try {
            console.log("I am inside the signup")
            e.preventDefault();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            await setDoc(doc(user , uid),{
                username :username,
                email : email
            })
   
            console.log("Document Added", uid)
            
        } catch (error) {
            
        }
       
    }

    return (
        <div>
            <div className="my-5">
                <h1 className='text-center'>Create Account</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={signUp}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="Enter Your User Name" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput2"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email address" required
                                    //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                     />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Password</label>
                                <input type="password"
                                    className="form-control"
                                    id="exampleFormControlInput3"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Your Password" required />
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

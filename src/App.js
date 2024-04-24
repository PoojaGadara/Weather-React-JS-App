
import React, { Component } from 'react';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import Navbar from '../src/components/pages/Navbar.jsx';
import AuthDetails from './components/auth/AuthDetails.jsx';
import ActiveUser from './components/ActiveUser.jsx';
import Home from '../src/components/pages/Home.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {
    return(
    <div>
    
    <Router>
    <Navbar />
       <Routes>     
            <Route path='/' element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/ActiveUser" element={<ActiveUser />}/>
        </Routes>
    </Router>
    </div>
    
        
    );

}
 
export default App ;



// import './App.css';
// import SignIn from './components/auth/SignIn.jsx';
// import SignUp from './components/auth/SignUp.jsx';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthDetails from './components/auth/AuthDetails.jsx';
// import Layout from './components/pages/Layout.jsx';

// function App() {

//   return (
//     <BrowserRouter>
//     <Routes >
//       <Route path="/" element={<Layout />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route index element={<SignUp />} />
//       <Route path="" element={<AuthDetails/>} />
//     </Routes> 
//   </BrowserRouter>
//     // <div className="App">
//     //   <SignIn/>
//     //   <SignUp />
//     //   < SignUp/>
//     // </div>
//   );
// }

// export default App;


//'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=DDkXk7RFbzdIVzlLOElKLHaPNip7voOL'

//Firebase 
//web API Key AIzaSyDzfxj46-IM6DpC20ISD5EytDdc9DZEly0
// Project name
// ReactAuth
// Project ID
// reactauth-22055
// Project number
// 269769553682
// Default GCP resource location
// Not yet selected
// Web API key
// AIzaSyDzfxj46-IM6DpC20ISD5EytDdc9DZEly0
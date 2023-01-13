import logo from './logo.svg';
import './App.css';
import LedgerGrid from './components/LedgerGrid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SingleLoanLedger from './components/SingleLoanLedger';
import Login from './components/Login';
import Home from './components/Home';
import fire from './Firebase';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from './state';
import EnquiryForm from './components/EnquiryForm';
import SanctionLetter from './components/SanctionLetter';
import AdminLogin from './components/AdminLogin';
import CustomerDetails from './components/CustomerDetails';
import AuthenticationService from './service/AuthenticationService';
import ViewCustomers from './components/ViewCustomers';





function App() {

  const login = (username) => {
    AuthenticationService.login(username)
  }

  const logout = () => {
    AuthenticationService.logout()
  }

  const [userLogged, setUserLogged] = useState(false);
  const dispatch = useDispatch();


  function authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setUserLogged(true)
        dispatch(userActions.getUserData(user.uid))
      }
      else{
        setUserLogged(false)
        //console.log("not logged in")
      }
    })
  }

  const logOutClick = () =>{
    fire.auth().signOut();
    
  }

  useEffect(()=>{
    authListener();
  })
  return (
    <div>
      <BrowserRouter>
        <header style={{ "position": "fixed" }} className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <a href="/" className="logo">
                    <h4>CreditBuzz <img src={require('./assets/images/logo-icon.png')} alt=""></img></h4>
                  </a>
                  <ul className="nav">
                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                    <li className="scroll-to-section"><a href="#dashboard" >Dashboard</a></li>
                    <li className="scroll-to-section"><a href="#features">Features</a></li>
                    <li className="scroll-to-section"><a href="#about">About Us</a></li>
                    <li className="scroll-to-section"><a href="/adminlogin">Admin Login</a></li>
                    {userLogged && <li className="scroll-to-section"><div className="main-blue-button"><a href="/" onClick={(e)=>logOutClick()}>Log Out</a></div></li>}
                  </ul>
                  <a className='menu-trigger'>
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/LedgerList" element={<LedgerGrid />}></Route>
          <Route path="/Ledger" element={<SingleLoanLedger/>}></Route>
          <Route path="/enquiryform" element={<EnquiryForm/>}></Route>
          <Route path="/sanctionletter" element={<SanctionLetter/>}></Route>
          <Route path="/adminlogin" element={<AdminLogin login={login}/>}></Route>
          <Route path="/customerdetails" element={<CustomerDetails/>}></Route>
          <Route path="/viewcustomers" element={<ViewCustomers/>}></Route>
        </Routes>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright © 2022 CreditBuzz Co., Ltd. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>      

      

    {/* // <BrowserRouter>
    //   <nav className="navbar navbar-expand-lg navbar-light navbar-neavy-blue">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <Link className="nav-link" to="/">Ledger List</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<LedgerGrid />}></Route>
    //     <Route path="/Ledger" element={<SingleLoanLedger />}></Route>
    //   </Routes>
    //   <div className="fixed-bottom footer-copyright">
    //     <div className="footer-copyright-wrapper">
    //       <p className="footer-copyright-text">
    //         <a className="footer-copyright-link" href="#" target="_self"> ©2023 | Designed By: Aman Singh | All rights reserved </a>
    //       </p>
    //     </div>
    //   </div>
    // </BrowserRouter> */}
    </div>
  );
}

export default App;

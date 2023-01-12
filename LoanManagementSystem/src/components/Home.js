import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs'
import CibilScore from './CibilScore'
import EnquiryForm from './EnquiryForm'
import fire from '../Firebase';

const Home = () => {
  const navigate = useNavigate();

  const [loggedUser,setLoggedUser] = useState(false);
  const getQuote = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        setLoggedUser(true);
        const element = document.getElementById('contact');
        if(element){
          element.scrollIntoView({behavior:'smooth'})
        }
      }
      else {
        navigate('/login')
      }
    })
  }

  useEffect(() => {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setLoggedUser(true)
      }
      else{
        setLoggedUser(false);
      }
    })
  },[]);
  return (
    <div>
      <div style={{ "backgroundImage": require('../assets/images/banner-dec-right.png') }} className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4">
                        <div className="info-stat">
                          <h6>Agency Status:</h6>
                          <h4>Ready Work</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="info-stat">
                          <h6>Loan:</h6>
                          <h4>₹ 720/Month</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="info-stat">
                          <h6>Schedules</h6>
                          <h4>450 Meeting / Day</h4>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h2>Loan &amp; Services</h2>
                      </div>
                      <div className="col-lg-12">
                        <div className="main-green-button scroll-to-section">
                          <a onClick={(e) => getQuote()}>Get Your Quote</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img src={require('../assets/images/banner-right-image.png')} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="features" className="features section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="features-content">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
                      <div className="first-number number">
                        <h6>01</h6>
                      </div>
                      <div className="icon"></div>
                      <h4>Reach Out</h4>
                      <div className="line-dec"></div>
                      <p>Out of Fund, need credit just visit our agency and get the loan instantly</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="features-item second-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                      <div className="second-number number">
                        <h6>02</h6>
                      </div>
                      <div className="icon"></div>
                      <h4>Develop a Strategy</h4>
                      <div className="line-dec"></div>
                      <p>Simplify the gruesome process of buying a home or refinancing a mortgage. Find out what makes Loan Simple different from others</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                      <div className="third-number number">
                        <h6>03</h6>
                      </div>
                      <div className="icon"></div>
                      <h4>Implementation</h4>
                      <div className="line-dec"></div>
                      <p>“If you don't take good care of your credit, then your credit won't take good care of you.”</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="features-item second-feature last-features-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                      <div className="fourth-number number">
                        <h6>04</h6>
                      </div>
                      <div className="icon"></div>
                      <h4>Analyze the result</h4>
                      <div className="line-dec"></div>
                      <p>Simple Loans for Faster Growth. Upto 5 lakhs of credit line, Get money in 48 hours. Hassle free daily repayments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Civil score */}
            {loggedUser && <CibilScore />}
          </div>
        </div>
      </div>
      {!loggedUser && <AboutUs />}
      {loggedUser && <EnquiryForm />}
    </div>
  )
}

export default Home
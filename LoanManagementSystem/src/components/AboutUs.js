import React from 'react'

const AboutUs = () => {
    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                            <img src={require('../assets/images/about-left-image.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="section-heading">
                            <h6>About Us</h6>
                            <h2>Top <em>loan</em> agency &amp; fulfill you dream <span>with us</span></h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="about-item">
                                    <h4>750+</h4>
                                    <h6>Loan</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="about-item">
                                    <h4>340+</h4>
                                    <h6>happy clients</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="about-item">
                                    <h4>128+</h4>
                                    <h6>awards</h6>
                                </div>
                            </div>
                        </div>
                        <p>India's leading Loan & Credit Relief Agency helping clients in Personal Loan, through a legal process based on RBI. You may contact us for more information. Thank you.</p>
                        <div className="main-green-button"><a href="#">Discover company</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
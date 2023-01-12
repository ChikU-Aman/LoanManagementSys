import React from 'react'
import { useSelector } from 'react-redux'

const CibilScore = () => {

    const cibil = useSelector(state=>state)
    console.log(cibil);
    return (
        <div className="col-lg-12">
            <div className="skills-content">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                            <div className="progress" data-percentage="10">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        10%<br />
                                        <span>Personal Loan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="progress" data-percentage="20">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        12%<br />
                                        <span>Education Loan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                            <div className="progress" data-percentage="40">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        16%<br />
                                        <span>Car Loan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="skill-item last-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                            <div className="progress" data-percentage="30">
                                <span className="progress-left">
                                    <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                    <div>
                                        11%<br />
                                        <span>Home Loan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CibilScore
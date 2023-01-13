import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const navigate = useNavigate()
    const viewLetter = () => {
        navigate('/sanctionletter')
    }

    const DownloadLetter = () => {
        fetch('SanctionLetter.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    return (

        <div id="dashboard" className="dashboard section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="section-heading">
                                <h2> <em>Acceptance Here</em></h2>
                                <h2>You can view or download your <span>Sanction</span> <em>Letter </em>here</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="main-green-button scroll-to-section">
                                    <a onClick={(e) => viewLetter()}>View Letter</a>
                                </div>
                            </div>
                            {/* <div className="col-lg-3">
                                <div className="main-green-button scroll-to-section">
                                    <a onClick={(e) => DownloadLetter()}>Download Letter</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserDashboard
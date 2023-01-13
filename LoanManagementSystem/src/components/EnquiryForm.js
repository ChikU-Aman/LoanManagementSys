import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const EnquiryForm = (values) => {

    const errors = {};
    if (!values.AdharNo) {
        errors.AdharNo = 'Adhaar number is required';
    }
    if (!values.PanNo) {
        errors.PanNo = 'Pan number is required';
    }
    if (!values.MobileNo) {
        errors.MobileNo = 'Mobile number is required';
    }

    const [user, setUser] = useState({
        EnquiryDate: '',
        EnquiryId: '',
        CustomerId: '',
        FirstName: '',
        LastName: '',
        PermanentAddress: '',
        CorrespondanceAddress: '',
        Pincode: '',
        DateOfBirth: '',
        MobileNo: '',
        Email: '',
        PanNo: '',
        AdharNo: '',
        Organisation: '',
        Designation: '',
        Salary: '',
        LoanType: '',
        LoanAmount: '',
        LoanTenure: '',
        RestFrequency: '',
        BankName: '',
        IfscCode: '',
        BankAddress: ''

    });

    const sendEmail = async (event) => {
        await fetch('http://localhost:5000/EnquiryDetails', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {

            })
            .catch((err) => {
                console.log(err.message);
            });

    }
    const onInputChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(user);
    };

 

    return (

        <div id="contact" className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        {/* <form id="contact" onSubmit={sendEmail}> */}
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-heading">
                                    <h6>Enquiry Form</h6>
                                    <h2>Fill Out The Form Below To <span>Get</span> <em>Credit </em>From Us</h2>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <form id="contact" onSubmit={sendEmail}>
                                    <div className="row">
                                    <div className="col-lg-4">
                                            <fieldset>
                                                <input type="date" name="EnquiryDate" placeholder="Enquiry Date" value={user.EnquiryDate} onChange={(e) => onInputChange(e)} />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4">
                                            <fieldset>
                                                <input type="text" name="EnquiryId" placeholder="EnquiryId" value={user.EnquiryId} onChange={(e) => onInputChange(e)} />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4">
                                            <fieldset>
                                                <input type="text" name="CustomerId" placeholder="CustomerId" value={user.CustomerId} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="FirstName" placeholder="First Name" value={user.FirstName} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="LastName" placeholder="Last Name" value={user.LastName} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <textarea type="text" name="PermanentAddress" placeholder="Permanent Address" value={user.PermanentAddress} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <textarea type="text" name="CorrespondanceAddress" placeholder="Correspondance Address" value={user.CorrespondanceAddress} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="Pincode" placeholder="Pincode" maxLength="6" value={user.Pincode} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="date" name="DateOfBirth" placeholder="DOB"  value={user.DateOfBirth} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="number" name="MobileNo" placeholder="Mobile Number" maxLength="10" value={user.MobileNo} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="email" name="Email"  placeholder="Your Email" value={user.Email} onChange={(e) => onInputChange(e)} required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="PanNo" placeholder="Pan Number" maxLength="10" value={user.PanNo} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="number" name="AdharNo" placeholder="Adhar Number" maxLength="12" value={user.AdharNo} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="Organisation" placeholder="Organisation"  value={user.Organisation} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="Designation" placeholder="Designation"  value={user.Designation} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="number" name="Salary" placeholder="Salary (INR)"  value={user.Salary} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="LoanType" placeholder="Loan Type" value={user.LoanType} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="number" name="LoanAmount" placeholder="Loan Amount (INR)" value={user.LoanAmount} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="number" name="LoanTenure" placeholder="Loan Tenure(Years)" value={user.LoanTenure} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="RestFrequency" placeholder="Rest Frequency" value={user.RestFrequency} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="BankName" placeholder="Bank Name" value={user.BankName} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset>
                                                <input type="text" name="IfscCode" placeholder="IFSC Code" value={user.IfscCode} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-6">
                                            <fieldset >
                                                <textarea type="text" name="BankAddress" placeholder="Bank Address" value={user.BankAddress} onChange={(e) => onInputChange(e)} autocomplete="on" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <Button type="submit" id="form-submit" className="main-button ">Send Enquiry</Button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnquiryForm
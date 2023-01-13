import React, { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const SanctionLetter = () => {
    const location = useLocation()
    const [customers, setCustomers] = useState({})

    const fetchCustomers = async () => {
        const data = await fetch("http://localhost:5000/EnquiryDetails/2")
        const parsedData = await data.json()
        setCustomers(parsedData)

    }
    useEffect(() => {
        fetchCustomers()

    }, [])

    const style = {
        fontWeight: 'bold'

    }

    return (

        <div className='container' style={{"marginTop": "120px"}}>
            <div className="row">
                <div className="col-lg-12">
                    <div className='section-heading' style={{ textAlign: 'center' }}>
                    <h2> <em>Acceptance Letter</em></h2><br/>
                        <h5>{customers.BankName}</h5>
                        <h5>{customers.BankAddress}</h5>
                    </div>
                    <hr style={{ color: 'black', backgroundColor: 'black', height: 1 }} />
                    <div className='row'>
                        <div className='col-sm' style={{ textAlign: 'left' }}>
                            <h6>Form No: 12345</h6>
                        </div>
                        <div className='col-sm' style={{ textAlign: 'right' }}>
                            <h6>Offer Date: <span> {customers.EnquiryDate}</span></h6>
                        </div>
                    </div><br />
                    <div>
                        <label style={style}> Applicant Name :</label><span> {customers.FirstName} {customers.LastName} </span><br />
                        <label style={style}>Address : </label><span> {customers.PermanentAddress} , {customers.Pincode} </span><br />
                        <label style={style}>Mobile No : </label><span>{customers.MobileNo} </span><br />
                        <label style={style}>Email :</label> <span>{customers.Email} </span>
                    </div>
                    <br />
                    <br />
                    <div>
                        <span>Dear Sir/Madam,</span><br /><br />
                        <span>We are pleased to inform you that we have in principle, in terms of your request,
                            approved a {customers.LoanType} as per the terms and condition mentioned below, special
                            conditions if any, and other conditions mentioned overleaf.
                        </span><br /><br />
                        <span>
                            As per your request,this offer is being made to you under {customers.BankName}'s {customers.LoanType} scheme,
                            under the Telescopic Repayment Option(TRO).
                        </span>
                    </div><br />
                    <div>
                        <label style={style}> Approved Loan :</label><span> {customers.LoanAmount} </span><br />
                        <label style={style}> Rate of Interest :</label><span> {customers.InterestRate} % p.a. on a variable rate basis***</span><br />
                        <label style={style}> Term :</label><span> {customers.LoanTenure} Years***</span>
                    </div><br />
                    <div>
                        <label style={style}> Repayment Terms:</label>
                        <label style={style}> Rest Frequency :</label><span> {customers.RestFrequency}</span><br />
                        <label style={style}> Equated Monthly Installment :</label><span> Rs. 35106 per month***</span><br />
                        <label style={style}> Payable in :</label><span> 300 installments***</span><br />
                    </div><br />
                    <div>
                        <label style={style}> Processing Fee Payable :</label><span> Rs. 3540</span><br />
                        <label style={style}> Processing Fee Received :</label><span>  Rs. 3540</span><br />
                        <label style={style}> Stamp Duty :</label><span>  Rs. 100</span><br />
                        <label > (Payable before Loan Disbursment. In case you have paid this amount,kindly ignore this.)</label>
                    </div><br />
                    <div>
                        We will be happy to expedite disbursment of this loan and request you to write to us on customerservice@hdfc.customers
                        from your registered mail address to complete the necessary formalities required by {customers.BankName}.
                    </div><br />
                    <div>
                        We look forward to hearing you from you.
                    </div><br />
                    <div>
                        <span>Yours faithfully,</span><br />
                        <span>{customers.BankName}</span>
                    </div><br /><br />
                    <div>
                        <span>Authorised Signatory</span>
                    </div><br />
                    <div>
                        I/We accept the above offer alongwith the terms and conditions.<br /><br />
                        <span>Borrower Signature ________________</span><br /><br />
                        <span>Date __________</span><br />
                    </div><br /><br />
                </div>
            </div>
        </div>

    )
}

export default SanctionLetter
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Form, Input, Label, FormGroup, Button, Row, Col } from 'reactstrap'

const ViewCustomers = () => {
    const location = useLocation()
    const [cust, setCustomer] = useState({})
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setCustomer({ ...cust, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log("location:", location)
        setCustomer(location.state.cust)
    }, [])

    const backToDetails = (e) => {
        navigate('/customerdetails')
    }

    const [disable, setDisable] = useState(true)
    const handleChange = event => {
        if (event.target.checked) {
            setDisable(false)
        } else {
            setDisable(true)
        }

    }


    const onClickApprove = async (e) => {
        const status = e.target.id
        const requestOptions = {
            'method': 'PUT',
            'body': JSON.stringify({
                EnquiryDate: cust.EnquiryDate,
                EnquiryId: cust.EnquiryId,
                CustomerId: cust.CustomerId,
                FirstName: cust.FirstName,
                LastName: cust.LastName,
                PermanentAddress: cust.PermanentAddress,
                CorrespondanceAddress: cust.CorrespondanceAddress,
                Pincode: cust.Pincode,
                DateOfBirth: cust.DateOfBirth,
                MobileNo: cust.MobileNo,
                Email: cust.Email,
                PanNo: cust.PanNo,
                AdharNo: cust.AdharNo,
                Organisation: cust.Organisation,
                Designation: cust.Designation,
                Salary: cust.Salary,
                LoanType: cust.LoanType,
                LoanAmount: cust.LoanAmount,
                LoanTenure: cust.LoanTenure,
                InterestRate: cust.InterestRate,
                CibilScore: cust.CibilScore,
                RestFrequency: cust.RestFrequency,
                BankName: cust.BankName,
                IFSCCode: cust.IFSCCode,
                BankAddress: cust.BankAddress,
                LoanStatus: status
            }),
            'headers': { "Content-type": "application/json" }

        }

        const data = await fetch(`http://localhost:5000/EnquiryDetails/${cust.id}`, requestOptions)
        const response = await data.json();
        navigate('/customerdetails')

    }

    return (
        <Container style={{ "marginTop": "120px", "marginBottom": "30px" }}>
            <div className="section-heading">
                <h2> <em>Customer Details</em></h2>
            </div>
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="enquirydate">Enquiry Date</Label>
                        <Input id="enquirydate" name="EnquiryDate" placeholder="Enquiry Date" type="text" value={cust.EnquiryDate}
                            onChange={onChangeHandler} disabled="true" />
                    </FormGroup>
                </Col>
            </Row>
            <hr style={{ color: '#33ccc5', backgroundColor: '#33ccc5', height: 3 }} />
            <Form >
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="enquiryid">Enquiry Id</Label>
                            <Input id="enquiryid" name="EnquiryId" placeholder="Enquiry Id" type="text" value={cust.EnquiryId}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="customerid">Customer Id</Label>
                            <Input id="customerid" name="CustomerId" placeholder="Customer Id" type="text" value={cust.CustomerId}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input id="firstname" name="FirstName" placeholder="First Name" type="text" value={cust.FirstName}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="lastname">Last Name</Label>
                            <Input id="lastname" name="LastName" placeholder="Last Name" type="text" value={cust.LastName}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="permanentaddress">Permanent Address</Label>
                            <Input id="permanentaddress" name="PermanentAddress" placeholder="Permanent Address" type="text" value={cust.PermanentAddress}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="correspondanceaddress">Correspondance Address</Label>
                            <Input id="correspondanceaddress" name="CorrespondanceAddress" placeholder="Correspondance Address" type="text" value={cust.CorrespondanceAddress}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="pincode">Pincode</Label>
                            <Input id="pincode" name="Pincode" placeholder="Pincode" type="text" value={cust.Pincode}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="dob">DOB</Label>
                            <Input id="dob" name="DateOfBirth" placeholder="DOB" type="text" value={cust.DateOfBirth}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="mobileno">Mobile No</Label>
                            <Input id="mobileno" name="MobileNo" placeholder="MobileNo" type="text" value={cust.MobileNo}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input id="email" name="Email" placeholder="Email" type="text" value={cust.Email}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="Pan">PAN</Label>
                            <Input id="Pan" name="PanNo" placeholder="PAN" type="text" value={cust.PanNo}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="adhar">Adhar</Label>
                            <Input id="adhar" name="AdharNo" placeholder="Adhar" type="text" value={cust.AdharNo}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="organisation">Organisation</Label>
                            <Input id="organisation" name="Organisation" placeholder="Organisation" type="text" value={cust.Organisation}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label for="designation">Designation</Label>
                            <Input id="designation" name="Designation" placeholder="Designation" type="text" value={cust.Designation}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="salary">Salary (INR)</Label>
                            <Input id="salary" name="Salary" placeholder="Salary" type="text" value={cust.Salary}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="loantype">Loan Type</Label>
                            <Input id="loantype" name="LoanType" placeholder="LoanType" type="text" value={cust.LoanType}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label for="loanamount">Loan Amount (INR)</Label>
                            <Input id="loanamount" name="LoanAmount" placeholder="Loan Amount" type="text" value={cust.LoanAmount}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="loantenure">Loan Tenure (Years)</Label>
                            <Input id="loantenure" name="LoanTenure" placeholder="Loan Tenure" type="text" value={cust.LoanTenure}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="interestrate">Interest Rate (%)</Label>
                            <Input id="interestrate" name="InterestRate" placeholder="InterestRate" type="text" value={cust.InterestRate}
                                onChange={onChangeHandler}  />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="cibilscore">CibilScore</Label>
                            <Input id="cibilscore" name="CibilScore" placeholder="CibilScore" type="text" value={cust.CibilScore}
                                onChange={onChangeHandler}  />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="restfrequency">Rest Frequency</Label>
                            <Input id="restfrequency" name="RestFrequency" placeholder="Rest Frequency" type="text" value={cust.RestFrequency}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="bankname">Bank Name</Label>
                            <Input id="bankname" name="BankName" placeholder="Bank Name" type="text" value={cust.BankName}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="ifsccode">IFSC Code</Label>
                            <Input id="ifsccode" name="IfscCode" placeholder="IFSCCode" type="text" value={cust.IfscCode}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="bankaddress">Bank Address</Label>
                            <Input id="bankaddress" name="BankAddress" placeholder="Bank Address" type="text" value={cust.BankAddress}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <hr style={{ color: '#33ccc5', backgroundColor: '#33ccc5', height: 3 }} />
                <h4>Verification</h4>
                <Row>
                    <Col md={6}>
                        <FormGroup check>
                            <Input type="checkbox" id="chkbox" onChange={handleChange} />
                            {' '}
                            <Label check>
                                Is Verification
                            </Label>
                        </FormGroup>
                    </Col>

                    <Col md={12} className='col text-right'>
                        <button style={{
                            "marginTop": "30px", "marginLeft": "10px", "height": "40px", "width": "100px",
                            "borderRadius": "14px", "backgroundColor": "#1e7773", "color": "white", "borderColor": "white"
                        }} type="submit" id="Approved" className="main-button" disabled={disable} onClick={onClickApprove}>Approve</button>

                        <button style={{
                            "marginTop": "30px", "marginLeft": "10px", "height": "40px", "width": "100px",
                            "borderRadius": "14px", "backgroundColor": "#269994", "color": "white", "borderColor": "white"
                        }} type="submit" id="Disapproved" className="main-button" disabled={disable} onClick={onClickApprove}>Disapprove</button>

                        <button style={{
                            "marginTop": "30px", "marginLeft": "10px", "height": "40px", "width": "100px",
                            "borderRadius": "14px", "backgroundColor": "#99e6e2", "color": "white", "borderColor": "white"
                        }} type="submit" id="form-submit" className="main-button" onClick={backToDetails}>Back</button>
                    </Col>
                </Row>

            </Form>


        </Container>
    )
}

export default ViewCustomers
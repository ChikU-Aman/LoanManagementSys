import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Table, Button } from 'reactstrap'

const CustomerDetails = () => {
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate();

    const fetchCustomers = async () => {
        const data = await fetch("http://localhost:5000/EnquiryDetails")
        const parsedData = await data.json()
        setCustomers(parsedData)
    }

    const getCustomerByEnqId = async (id) => {
        //console.log(id, 'Id')
        const data = await fetch(`http://localhost:5000/EnquiryDetails/${id}`)
        const response = await data.json();
        // console.log(data, 'data');
        navigate("/viewcustomers", { state: { cust: response } })
    }


    useEffect(() => {
        fetchCustomers()
    }, [])

    return (
        <Container style={{ "marginTop": "120px", "marginBottom": "100px" }}>
            <div className="section-heading">
                <h2> <em>Dashboard</em></h2>
            </div>
            <Table hover >
                <thead>
                    <th>EnquiryDate</th>
                    <th>EnquiryId</th>
                    <th>CustomerId</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>LoanType</th>
                    <th>LoanAmount</th>
                    <th>Action</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {customers.map((cust) => {
                        return <tr>
                            <td>{cust.EnquiryDate}</td>
                            <td>{cust.EnquiryId}</td>
                            <td>{cust.CustomerId}</td>
                            <td>{cust.FirstName}</td>
                            <td>{cust.LastName}</td>
                            <td>{cust.LoanType}</td>
                            <td>{cust.LoanAmount}</td>
                            <td>
                                <div className="main-green-button scroll-to-section" >
                                    <a onClick={(e) => getCustomerByEnqId(cust.id)}>View Details</a></div>
                            </td>
                            <td style={{ fontWeight: 'bold' }}>{cust.LoanStatus}</td>
                            <td></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default CustomerDetails
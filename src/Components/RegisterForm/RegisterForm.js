import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const RegisterForm = () => {

    const [firstName,setFirstName]=useState("")
    const [lastName, setLastName] = useState("")
    const [storeValue,setStoreValue]=useState({})
    const handleField = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...storeValue };
        newValue[field] = value;
        setStoreValue(newValue);
    }
    const handleRegisterForm = (e) => {
        e.preventDefault();
        const Name = firstName +" "+ lastName;
        const dataValue = {
          ...storeValue,
          Name
        };
        fetch("https://ancient-journey-42061.herokuapp.com/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataValue),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              swal({
                title: "Good job!",
                text: "Register Successfully!",
                icon: "success",
              });
            }
            e.target.reset();
          });
    }



    return (
      <div className="container mt-5 w-50 ">
        <section>
          <h2>User Registration</h2>
        </section>
        <Form className="text-start" onSubmit={handleRegisterForm}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>BirthDate</Form.Label>
            <Form.Control
              type="date"
              required
              name="BirthDate"
              onChange={handleField}
              placeholder="Date Of Birth"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              name="Email"
              onChange={handleField}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="number"
              name="Contact_Number"
              onChange={handleField}
              placeholder="Number..."
              pattern="[0-9]{10}"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="Address"
              required
              onChange={handleField}
              placeholder="Address..."
              className="py-4"
            />
          </Form.Group>
          <button type="submit" className="btn btn-warning">
            {" "}
            Submit
          </button>
        </Form>
        <Link to="/seeAllUser">
          <button type="submit" className="btn btn-success mt-4">
            {" "}
            See All Registered User
          </button>
        </Link>
      </div>
    );
};

export default RegisterForm;
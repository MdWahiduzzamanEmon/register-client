import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SeeAllUser = () => {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        fetch("https://ancient-journey-42061.herokuapp.com/userRegister")
          .then((res) => res.json())
          .then((data) => setUserDetails(data));
    },[])

    return (
      <div className="container mt-5">
        <section className="text-start py-3">
         <Link to="/"> <span className="fs-5">-Back</span></Link><h2>User Details:</h2>
        </section>
        <Row xs={1} md={4} className="g-4">
          {userDetails?.map((userDetail) => (
            <Col key={userDetail._id}>
              <Card className="border border-primary">
                <Card.Body>
                  <Card.Text className="text-start">
                    <h5 className="py-2 my-1 text-secondary">
                      Name: <span className="fs-6 text-black"> {userDetail?.Name}</span>
                    </h5>{" "}
                    <h5 className="py-2 my-1 text-secondary">
                      Birth Date: <span className="fs-6 text-black"> {userDetail?.BirthDate}</span>
                    </h5>
                    <h5 className="py-2 my-1 text-secondary">Email: <span className="fs-6 text-black"> {userDetail?.Email}</span></h5>
                    <h5 className="py-2 my-1 text-secondary">
                      Contact Number:<span className="fs-6 text-black">  {userDetail?.Contact_Number}</span>
                    </h5>
                    <h5 className="py-2 my-1 text-secondary">
                      Address: <span className="fs-6 text-black"> {userDetail?.Address}</span>
                    </h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default SeeAllUser;
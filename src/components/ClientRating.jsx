import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import "./ClientRating.css"
import sarh from "../assets/sarah.jpg"
import jhn from "../assets/john.jpg"
import arn from "../assets/Arun.jpg"
import anj from "../assets/anjali.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


function ClientRating() {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Row className="mt-5">
            <Col md={3} className="text-center">
              <Card style={{ width: "100%", borderRadius: "20px"}}>
                <Card.Img className="rounded-circle mt-4 py-2 px-5" variant="top" src={jhn}/>
                <Card.Body>
                  <Card.Title className="bg-dark rounded-5 text-light py-2 mx-3 paratxt"> John D</Card.Title>
                  <div className=" d-flex justify-content-center align items-center fs-5 py-2">
                    <div className="checked"><FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <span>
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                    
                  </div>
                  <Card.Text className="para py-2 justify-content">
                  "Great experience! The driver was courteous, avoided traffic, and the car was clean. I'll definitely use this service again."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
            <Card style={{ width: "100%", borderRadius: "20px" }}>
                <Card.Img className="rounded-circle mt-4 py-2 px-5" variant="top" src={sarh}/>
                <Card.Body>
                  <Card.Title className="bg-dark rounded-5 text-light py-2 mx-3 paratxt"> Sarah Thomas</Card.Title>
                  <div className=" d-flex justify-content-center align items-center fs-5 py-2">
                    <div className="checked"><FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    
                  </div>
                  <Card.Text className="para py-2">
                  "Exceptional service! Our chauffeur was punctual, professional, and made the journey enjoyable. Highly recommended!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
            <Card style={{ width: "100%", borderRadius: "20px" }}>
                <Card.Img className="rounded-circle mt-4 py-2 px-5" variant="top" src={arn}/>
                <Card.Body>
                  <Card.Title className="bg-dark rounded-5 text-light py-2 mx-3 paratxt"> Arjun Aravind</Card.Title>
                  <div className=" d-flex justify-content-center align items-center fs-5 py-2">
                    <div className="checked"><FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    
                    
                  </div>
                  <Card.Text className="para py-2">
                  "Amazing service! Our chauffeur went above and beyond for a pleasant trip. Impressive attention to detail. Five stars!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="text-center">
            <Card style={{ width: "100%", borderRadius: "20px" }}>
                <Card.Img className="rounded-circle mt-4 py-2 px-5" variant="top" src={anj}/>
                <Card.Body>
                  <Card.Title className="bg-dark rounded-5 text-light py-2 mx-3 paratxt"> Anjali S</Card.Title>
                  <div className=" d-flex justify-content-center align items-center fs-5 py-2">
                    <div className="checked"><FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <span>
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                    
                  </div>
                  <Card.Text className="para py-2">
                  "Very satisfied with the service. The driver was friendly and professional. Despite a slight pickup delay."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}

export default ClientRating;

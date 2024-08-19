import React from "react";
import { Row, Col } from "react-bootstrap";
import fasticon from "../assets/fast.png";
import consistanticon from "../assets/consistent.png";
import innovateicon from "../assets/innovative.png";
import "./Reasons.css";

function Reasons() {
  return (
    <div className="container-fluid reasons-container">
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Row className="mt-5">
            <Col md={4}>
              <div className="reason-div">
                <img src={fasticon} alt="Fast Icon" className="reason-icon" />
                <div className="reason-body">
                  <h3 className="title pb-2">Fast</h3>
                  <p className="reason-text">
                    ProChauffeur is responsive and fast. We take your schedule seriously.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="reason-div">
                <img src={consistanticon} alt="Consistent Icon" className="reason-icon" />
                <div className="reason-body">
                  <h3 className="title pb-2">Consistent</h3>
                  <p className="reason-text">
                    Consistency ensures you can build your life on us. You always know what to expect.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="reason-div">
                <img src={innovateicon} alt="Innovative Icon" className="reason-icon" />
                <div className="reason-body">
                  <h3 className="title pb-2">Innovative</h3>
                  <p className="reason-text">
                    We are on top of the newest technologies to amaze you with.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}

export default Reasons;

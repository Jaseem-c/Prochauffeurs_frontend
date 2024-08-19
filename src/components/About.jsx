import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleLoginClick_2 = () => {
    navigate("/bookride");
  };
  return (
    <>
    <div className="container-fluid" id="about">
        <Row className="BkGrnd">
          <Col md={1}></Col>
          <Col md={10}>
            <Row>
              <h1
                className="Htitle d-flex justify-content-center align-items-center mb-4"
              >
                About
              </h1>
            </Row>
            <Row>
              <Col md={6} className="pb-5 mb-5 pe-5 smallscreen">
                <h2 className="Htitle">
                  Let us take the weight off your shoulders by planning your
                  ride—from start to end
                </h2>
              </Col>
              <Col md={6} className="ps-2 smallscreen">
                <Row className="fs-5 pb-4" style={{ fontWeight: "100" }}>
                  <p>
                    ProChauffeurs specializes in hassle-free, discrete, and
                    punctual transportation services to ensure that you arrive
                    prepared and rested.
                  </p>
                </Row>
                <Row>
                  <Col>
                    <h3 className="fs-4">Punctual</h3>
                    <p>
                      We are always on time. You can count on ProChauffeur when
                      it comes to your travel plans.
                    </p>
                  </Col>
                  <Col>
                    <h3 className="fs-4">Smooth</h3>
                    <p>
                      Our mission is to create peace of mind by doing what we do
                      best—organizing your travel.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="booktransfer d-flex justify-content-center align-items-center p-md-5">
              <Col md={6} className="text-center text-md-start ps-md-5">
                <p className="Htitle">
                  Book your elite transfer, <br /> in minutes
                </p>
              </Col>
              <Col md={6} className="text-center text-md-end pe-md-5">
                <Button
                  className="bookbtn px-5 py-3"
                  onClick={handleLoginClick_2}
                >
                  BOOK NOW
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </>
  )
}

export default About
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import airTrans from "../assets/airport_trans.jpg";
import cityTran from "../assets/city_transfer.jpg";
import CorTrans from "../assets/corporate_trans.jpg";
import hourImg from "../assets/hourly_book.jpg";
import "./Services.css";

function Services() {
  return (
    <>
      <Row className="BkGrnd2">
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <h1 className="Htitle d-flex justify-content-center align-items-center mb-4">
              Our Services
            </h1>
          </Row>
          <Row>
            <div className="container-fluid">
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <Row className="mt-5">
                    <Col md={3} className="text-center cardw">
                      <Card style={{ width: "100%", borderRadius: "25px" }}>
                        <Card.Img
                          variant="top"
                          src={hourImg}
                          style={{ borderRadius: "25px" }}
                        />
                      </Card>
                      <h4 className="pt-4 paratxt">Hourly Booking</h4>
                    </Col>
                    <Col md={3} className="text-center">
                      <Card style={{ width: "100%", borderRadius: "25px" }}>
                        <Card.Img
                          variant="top"
                          src={airTrans}
                          style={{ borderRadius: "25px" }}
                        />
                      </Card>
                      <h4 className="pt-4 paratxt">Airport Transfer</h4>
                    </Col>
                    <Col md={3} className="text-center">
                      <Card style={{ width: "100%", borderRadius: "25px" }}>
                        <Card.Img
                          variant="top"
                          src={cityTran}
                          style={{ borderRadius: "25px" }}
                        />
                      </Card>
                      <h4 className="pt-4 paratxt">City Transfers</h4>
                    </Col>
                    <Col md={3} className="text-center">
                      <Card style={{ width: "100%", borderRadius: "25px" }}>
                        <Card.Img
                          variant="top"
                          src={CorTrans}
                          style={{ borderRadius: "25px" }}
                        />
                      </Card>
                      <h4 className="pt-4 paratxt">Corporate Transport</h4>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}></Col>
              </Row>
            </div>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  );
}

export default Services;
